<template>
    <div class="progress-bar-wrapper">
        <div class="progress-bar-header">
            <span>{{ title }}</span>
            <span>{{ value }}%</span>
        </div>

        <div class="progress">
            <div
                class="progress-bar"
                role="progressbar"
                :style="{width:`${value}%`}"
                :aria-valuenow="value"
                aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },

            value: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress-bar-wrapper {
        margin: 2px 0 0 0;

        &.align-center {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;

            .progress {
                flex: 1;
                margin-right: 1rem;
            }
        }

        .progress-bar-header {
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            color: $grey-2;
        }

        .progress {
            height: 4px;

            &-bar {
                background-color: $burgundy;
            }
        }
    }
</style>
