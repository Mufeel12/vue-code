<template>
    <div class="page-container">
        <stats :training-types="trainingTypes" />
        <progress-bar :value="[educationScore]" />
        <courses :trainingTypes="trainingTypes" />
        <unfinished-courses :jumpInBack="jumpInBack" v-if="jumpInBack.length" />
    </div>
</template>

<script>
import UnfinishedCourses from "~/components/training/unfinished-courses"
import Courses from "~/components/training/courses"
import Stats from "~/components/training/stats"
import ProgressBar from "~/components/training/progress"

export default {
    components: {
        UnfinishedCourses,
        Courses,
        Stats,
        ProgressBar,
    },
    data() {
        return {
            trainingTypes: [],
            educationScore: 0,
            jumpInBack: [],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            this.getTrainingTypes();
        })
    },
    methods: {
        async getTrainingTypes() {
            try {
                const response = await this.$axios.get('training-types')
                this.trainingTypes = response.data.training_types
                this.educationScore = response.data.education_score
                this.jumpInBack = response.data.jump_in_back
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish();
                });
            } catch (error) {
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish();
                });
            }
        }
    },
}
</script>
