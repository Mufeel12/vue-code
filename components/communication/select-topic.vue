<template>
    <div class="select-topic">
        <h4 class="title">Select conversation topic</h4>
        <div class="topic-list">
            <template v-for="category in categories">
                <router-link
                    :to="{
                        name: 'communication.subject',
                        params: { slug: category.id }
                    }"
                    :key="category.id"
                >
                    <category :category="category" />
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
import Category from './category.vue'

export default {
    components: {
        Category,
    },
    data() {
        return {
            categories: [],
        }
    },
    created() {
        this.getCommunicationCategories();
    },
    methods: {
        async getCommunicationCategories() {
            try {
                this.$nextTick(() => {
                    this.$root.$loading.start();
                });

                const response = await this.$axios.get(`communication-categories`);
                this.categories = response.data.data;
            } catch (error) {
            } finally {
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish()
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
