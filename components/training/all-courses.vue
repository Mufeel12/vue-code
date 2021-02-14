<template>
    <div class="all-courses">
        <div class="heading">
            <h1 class="title">{{ title }}</h1>
        </div>

        <div class="filters">
            <div class="filter-search">
                <input-search
                    :placeholder="'Search courses'"
                    @input="$emit('update:searchValue', $event)"
                />
            </div>

            <div class="filter float-right position-relative">
                <button
                    class="btn btn-filter"
                    @click="showFilter = !showFilter"
                >
                    <img
                        src="@/assets/images/courses/filter-icon.png"
                        class="filter-icon"
                    />
                    <span class="text">
                        Filtering
                    </span>

                    <img
                        src="@/assets/images/courses/filter-dropdown-icon.png"
                        class="filter-dropdown-icon"
                    />
                </button>
                <div
                    class="filter-box shadow-sm border p-3 position-absolute bg-light"
                    v-show="showFilter"
                >
                    <div class="body">
                        <group-checkboxes
                            title="Categories:"
                            :value="selectedCategories"
                            @update:value="
                                $emit('update:selectedCategories', $event)
                            "
                            :options="categories"
                            :all-is-checked.sync="allCategoriesIsChecked"
                            has-all-button
                        />
                        <group-checkboxes
                            title="Level:"
                            :value="selectedLevels"
                            @update:value="
                                $emit('update:selectedLevels', $event)
                            "
                            :options="levels"
                            :all-is-checked.sync="allLevelsIsChecked"
                            has-all-button
                        />
                    </div>

                    <hr class="hr-line" />
                    <div class="footer">
                        <button class="btn btn-light" @click="clearAll">
                            Clear All
                        </button>
                        <button class="btn btn-primary" @click="apply">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-cover">
            <template v-for="(course, index) in courses">
                <template v-if="index < amountCoursesOnPage">
                    <course :key="course.id" :course="course" />
                </template>
            </template>
        </div>
        <template v-if="isAvailableToLoadMore()">
            <button class="btn btn-light btn-block" @click="loadMore">
                Load more
            </button>
        </template>
    </div>
</template>

<script>
import InputSearch from '~/components/form/input-search'
import FieldSelect from '~/components/form/field-select'
import Course from '~/components/training/course'
import GroupCheckboxes from '~/components/form/group-checkboxes'

export default {
     components: {
        InputSearch,
        FieldSelect,
        Course,
        GroupCheckboxes,
    },
    props: {
        courses: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: 'All courses'
        },
        searchValue: {
            type: String,
            default: ''
        },
        categories: {
            type: Array,
            default() {
                return []
            }
        },
        levels: {
            type: Array,
            default() {
                return []
            }
        },
        selectedCategories: {
            type: Array,
             default() {
                return []
            }
        },
        selectedLevels: {
            type: Array,
             default() {
                return []
            }
        }
    },
    data() {
        return {
            amountCoursesOnPage: 9,
            amountCoursesInBlock: 9,
            showFilter: false,
            allLevelsIsChecked: true,
            allCategoriesIsChecked: true,
        }
    },
    methods: {
        loadMore() {
            if (this.amountAvailableCoursesToShow() > this.amountCoursesInBlock) {
                this.amountCoursesOnPage +=  this.amountCoursesInBlock;
            } else {
                this.amountCoursesOnPage += this.amountAvailableCoursesToShow();
            }
        },
        isAvailableToLoadMore(){
            return this.amountAvailableCoursesToShow() > 0
        },
        amountAvailableCoursesToShow(){
            return this.courses.length > this.amountCoursesOnPage?
                    this.courses.length - this.amountCoursesOnPage: 0;
        },
        clearAll() {
            this.allLevelsIsChecked = true
            this.allCategoriesIsChecked = true
            this.$emit('update:selectedCategories', [])
            this.$emit('update:selectedLevels', [])
            this.$emit('apply')
            this.showFilter = false;
        },
        apply(){
            this.$emit('apply');
            this.showFilter = false;
        }
    },
}
</script>
