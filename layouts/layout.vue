<template>
    <div class="training-layout">
        <aside-view :items="menuItems" />

        <section class="layout-side">
            <navbar :userInfo="userInfo" :items="menuItems" />

            <div class="page-content" v-show="!isMobileMenuActive">
                <router-view />
            </div>
        </section>
    </div>
</template>

<script>
    import AsideView from '~/components/training/aside'
    import Navbar from '~/components/training/navbar'
    import { mapState } from 'vuex'

    export default {
        components: { AsideView, Navbar },
        created() {
            this.getLayoutData();
        },
        data() {
            return {
                menuItems: [],
                userInfo: {
                    score: 0,
                    rank: '1th',
                }
            };
        },
        computed: {
            ...mapState({
                isMobileMenuActive: state => state.isMobileMenuActive
            }),
        },
        methods: {
            async getLayoutData() {
                this.$nextTick(() => {
                    this.$root.$loading.start();
                });

                try {
                    const response = await this.$axios.get(`layout`);

                    this.menuItems = response.data.left_menu;
                    this.userInfo.score = response.data.score;
                    this.userInfo.rank = response.data.rank;
                    this.$nextTick(() => {
                        this.$nuxt.$loading.finish()
                    });
                } catch (error) {
                    this.$nextTick(() => {
                        this.$nuxt.$loading.finish()
                    });
                }
            },
        }
    }
</script>
