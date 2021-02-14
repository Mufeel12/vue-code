<template>
    <div class="all-tests">
        <div class="heading">
            <h1 class="title">All tests</h1>
        </div>

        <div class="test-cover">
            <template v-for="i in 12">
                <test v-bind:key="i" />
            </template>
        </div>
        <button class="btn btn-light btn-block load-button">Load more</button>
    </div>
</template>

<script>
import Test from './test'

export default {
    components: {
        Test,
    },
}
</script>
