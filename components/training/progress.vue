<template>
    <div class="training-progress">
        <div class="progress-cover">
            <div class="text-cover">
                <p class="lead">{{ title }}</p>
                <p class="percent">
                    <span v-if="!value[1]">{{ value[0] }}%</span>
                    <span v-else>{{ `${value[0]} out of ${value[1]}` }}</span>
                </p>
            </div>

            <div class="progress">
                <div class="line" :style="`width: ${value[0]}%`"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Array,
                required: true
            },
            title: {
                type: String,
                default: 'Your overall LG education score'
            }
        }
    }
</script>
