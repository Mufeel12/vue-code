<template>
    <div class="training-stats">
        <div class="text-cover">
            <h1 class="title">Training section</h1>
            <p class="lead">
                You’re doing great Janis, keep the momentum not to loose your
                progress!
            </p>
        </div>
        <div class="stats-cover">
            <template v-for="(stats, statsIndex) in trainingTypes">
                <div class="stats" :key="statsIndex">
                    <p class="title">{{ stats.name }}</p>
                    <p class="count" :class="stats.icon">
                        {{ stats.total }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trainingTypes: {
            type: Array,
            default: null
        },
    },
}
</script>
