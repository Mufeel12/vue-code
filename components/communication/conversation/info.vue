<template>
    <div class="conversation-info">
        <div class="theme-image">
            <span class="text"> SB </span>
        </div>
        <div class="theme">
            <h4 class="title">{{ conversation.subject }}</h4>
            <p class="subtitle">{{ conversation.category }}</p>
        </div>
        <div class="search">
            <!-- do not remove
            <template v-if="isSearchOpen === false">
                <button class="btn" @click="isSearchOpen = !isSearchOpen" disabled>
                    <img
                        src="~@/assets/images/search.svg"
                        class="search-toggle"
                    />
                </button>
            </template>
            <template v-else>
                <div class="filter-search">
                    <input-search
                        :placeholder="'Search'"
                        @input="$emit('update:searchValue', $event)"
                    />
                </div>
            </template> -->
        </div>
    </div>
</template>

<script>
import InputSearch from '~/components/form/input-search'

export default {
    components: {
        InputSearch,
    },
    props: {
        conversation: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    data() {
        return {
            isSearchOpen: false
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
