<template>
    <div class="completed-courses">
        <div class="heading">
            <h1 class="title">Completed courses</h1>
        </div>

        <div class="course-cover">
            <template v-for="(course, index) in courses">
                <template>
                    <course :key="course.id" :course="course" isCompleted />
                </template>
            </template>
        </div>
<!--        <template v-if="isAvailableToLoadMore()">-->
<!--            <button class="btn btn-light btn-block" @click="seeAll">-->
<!--                See all-->
<!--            </button>-->
<!--        </template>-->
    </div>
</template>

<script>
import Course from '~/components/training/course'

export default {
    components: {
        Course,
    },
    props: {
        courses: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            amountCoursesOnPage: 1,
        }
    },
    methods: {
        seeAll() {
            this.amountCoursesOnPage = this.courses.length;
        },
        isAvailableToLoadMore(){
            return this.amountAvailableCoursesToShow() > 0
        },
        amountAvailableCoursesToShow(){
            return this.courses.length > this.amountCoursesOnPage?
                    this.courses.length - this.amountCoursesOnPage: 0;
        }
    },
}
</script>
