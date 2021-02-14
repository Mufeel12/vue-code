<template>
    <div class="page-container">
        <courses-info />
        <progress-bar
            :title="'Your overall courses progress'"
            :value="[progress, 100]"
        />
        <unfinished-courses
            class="padding-top"
            :jumpInBack="jumpInBack"
            v-if="jumpInBack.length"
        />
        <all-courses
            :courses="courses"
            :categories="categories"
            :levels="levels"
            :selected-categories.sync="selectedCategories"
            :selected-levels.sync="selectedLevels"
            :search-value.sync="search"
            @apply="fetchData"
        />
        <completed-courses
            v-if="completedCourses.length"
            :courses="completedCourses"
        />
    </div>
</template>

<script>
import CoursesInfo from '~/components/training/courses-info'
import ProgressBar from '~/components/training/progress'
import UnfinishedCourses from '~/components/training/unfinished-courses'
import AllCourses from '~/components/training/all-courses'
import CompletedCourses from '~/components/training/completed-courses'

export default {
    components: {
        CoursesInfo,
        ProgressBar,
        UnfinishedCourses,
        AllCourses,
        CompletedCourses,
    },
    data() {
        return {
            timeout: undefined,
            search: '',
            courses: [],
            total: 0,
            progress: 0,
            jumpInBack:  [],
            completedCourses: [],
            categories: [],
            levels: [],
            links: null,
            meta: null,
            selectedCategories: [],
            selectedLevels: [],
        }
    },
    mounted () {
        this.$nextTick(() => {
        this.$nuxt.$loading.start();
        })
    },
    methods: {
        async fetchData() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
            });
            try {
                const params = {}

                if(this.search !== '') {
                    params.search = this.search
                }
                if(this.selectedCategories.length !== 0) {
                    params.categories = this.selectedCategories.join(',')
                }
                if(this.selectedLevels.length !== 0) {
                    params.levels = this.selectedLevels.join(',')
                }

                const response = await this.$axios.get(`trainings/course`, {
                    params
                });

                this.courses = response.data.data;
                this.total = response.data.total;
                this.progress = response.data.progress;
                this.jumpInBack = response.data.jump_in_back;
                this.completedCourses = response.data.completed_courses;
                this.categories = response.data.categories.map(item => ({ value: item.id, name: item['name'] }));
                this.levels = response.data.levels.map(item => ({ value: item.id, name: item['name'] }));
                this.links = response.data.links;
                this.meta = response.data.meta;
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish();
                });
            } catch (error) {
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish();
                });
             }
        },

        debouncedFetchData() {
            if(this.timeout !== undefined) {
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(() => this.fetchData(), 500)
        },
    },
    watch: {
        search: {
            immediate: true,
            deep: true,
            handler(newSearch) {
                this.debouncedFetchData()
            }
        },
    },

}
</script>
