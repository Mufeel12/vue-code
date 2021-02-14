<template>
    <div class="course-list">
        <div class="course-cover">
            <div
                class="card-cover"
                v-for="type in trainingTypes"
                :key="type.id"
            >
                <div class="card">
                    <div class="image-cover">
                        <img :src="type.image_url" class="card-img-top" />
                    </div>

                    <div class="card-body">
                        <router-link :to="`/training/${type.slug}`">
                            <a class="card-title">{{ type.name }}</a>
                        </router-link>

                        <p class="card-text">
                            {{ type.description }}
                        </p>

                        <div class="progress-cover">
                            <div class="line-cover">
                                <div
                                    class="progress"
                                    :style="`width: ${type.progress}%;`"
                                ></div>
                            </div>

                            <p class="info">
                                You progress {{ type.progress }} out of 100
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trainingTypes: {
            type: Array,
            default: null
        },
    },
}
</script>
