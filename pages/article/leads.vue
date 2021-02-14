<template>
    <div class="leads-container">
        <div class="row mb-4">
            <div class="col-md-12 mb-4">
                <h2 class="title">Further reads</h2>
            </div>
            <div class="course-cover">
                <template v-for="course in courses">
                    <course :key="course.id" :course="course"/>
                </template>
            </div>

        </div>
    </div>
</template>
<script>
    import Course from '~/components/training/course'
    export default {
        props: ['courses'],
        components: {
            Course
        }
    }
</script>
