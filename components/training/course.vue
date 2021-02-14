<template>
    <div class="course">
        <div class="image-cover">
            <img :src="course.thumb_image" class="image" />
        </div>

        <div class="card-body">
            <div class="info">
                {{ course.date }}
                <span class="vertical-line">| </span>
                {{ course.category }}
                <span class="vertical-line">| </span>
                {{ course.level }}
            </div>

            <div class="top">
                <h4 class="name"><router-link :to="`/article/${course.slug}`">{{ course.title }}</router-link></h4>
                <p class="points" :class="{ 'points-completed': isCompleted }">
                    +{{ course.points }}
                </p>
            </div>

            <div class="bottom">
                <template v-if="isCompleted">
                    <router-link class="link" :to="`/article/${course.slug}`">
                        Revisit
                    </router-link>
                    <span class="completed">Completed</span>
                </template>
                <template v-else>
                    <nuxt-link :to="`/article/${course.slug}`" class="link">
                        Continue
                    </nuxt-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isCompleted: {
            type: Boolean,
            default: false
        },

        course: {
            type: Object,
            default: null
        },
    },
}
</script>
