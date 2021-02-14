<template>
    <div class="completed-tests">
        <div class="heading">
            <h1 class="title">Completed tests</h1>
        </div>

        <div class="test-cover">
            <template v-for="i in 3">
                <test v-bind:key="i" isCompleted />
            </template>
        </div>
        <button class="btn btn-light btn-block load-button">See all</button>
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
