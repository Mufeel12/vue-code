<template>
    <div class="conversations-head">
        <div class="filter-search">
            <input-search
                :placeholder="'Search inbox'"
                @input="$emit('update:searchValue', $event)"
            />
        </div>
        <router-link :to="{ name: 'communication.select-topic' }">
            <button class="btn btn-primary">
                <span class="plus">&#43;</span>New message
            </button>
        </router-link>
    </div>
</template>

<script>
import InputSearch from '~/components/form/input-search'

export default {
    components: {
        InputSearch,
    },
}
</script>

<style lang="scss" scoped>
</style>
