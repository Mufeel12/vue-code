<template>
    <div class="page-container">
        <tests-info />
        <progress-bar :value="[0, 100]" />
        <!-- <all-tests />
        <completed-tests /> -->
        <div class="all-courses">
            <div class="heading">
                <h1 class="title">Currently there are no tests</h1>
            </div>
        </div>
    </div>
</template>

<script>
import TestsInfo from '~/components/training/tests-info'
import ProgressBar from '~/components/training/progress'
import AllTests from '~/components/training/all-tests'
import CompletedTests from '~/components/training/completed-tests'

    export default {
        components: {
            TestsInfo,
            ProgressBar,
            AllTests,
            CompletedTests,
        },
    }
</script>

<style lang="scss" scoped>
</style>
