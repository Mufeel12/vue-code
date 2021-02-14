<template>
    <div class="unfinished-courses">
        <div class="heading">
            <h1 class="title">Jump in back</h1>
            <p class="lead">
                Janis, you have some unfinished progress, check continue
                learning now.
            </p>
        </div>

        <div class="course-cover carousel-cover">
            <carousel
                class="d-block d-md-none"
                :scrollPerPage="true"
                :paginationEnabled="false"
                :perPageCustom="[
                    [0, 1],
                    [560, 2]
                ]"
            >
                <slide
                    class="course"
                    v-for="(course, index) in jumpInBack"
                    v-bind:key="index"
                >
                    <div class="top">
                        <h4 class="name">
                            <router-link :to="`/article/${course.slug}`">{{
                                course.title
                            }}</router-link>
                        </h4>
                        <div class="points">+{{ course.points }}</div>
                    </div>
                    <router-link :to="`/article/${course.slug}`" class="link">
                        <a>Continue</a>
                    </router-link>
                </slide>
            </carousel>

            <div
                class="course d-none d-md-flex"
                v-for="(course, index) in jumpInBack"
                v-bind:key="index"
            >
                <div class="top">
                    <h4 class="name">
                        <router-link :to="`/article/${course.slug}`">{{
                            course.title
                        }}</router-link>
                    </h4>
                    <div class="points">+{{ course.points }}</div>
                </div>
                <router-link :to="`/article/${course.slug}`" class="link">
                    <a>Continue</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    },
    props: {
        jumpInBack: {
            type: Array,
            default: null
        },
    },
}
</script>
