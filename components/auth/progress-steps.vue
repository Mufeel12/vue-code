<template>
    <div class="progress-steps-wrapper">
        <div class="progress-steps-header">
            <span class="progress-steps-title">
                <img svg-inline src="~/assets/images/verification.svg" class="icon">
                <span>{{ title }}</span>
            </span>
        </div>

        <div class="progress-steps">
            <template v-for="(stepTitle, index) in stepsTitles">
                <div :key="stepTitle" class="progress-step">
                    <div class="progress-step-bar" :class="{'success': currentStep > index}"></div>

                    <div class="progress-step-title">{{ stepTitle }}</div>
                </div>
            </template>
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

            currentStep: {
                type: Number,
                default: 0
            },

            stepsTitles: {
                type: Array,
                default() {
                    return ['1', '2', '3'];
                }
            }
        }
    }
</script>
