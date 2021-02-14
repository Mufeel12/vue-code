<template>
    <div class="unfinished-courses">
        <div class="heading">
            <h1 class="title">Jump in back</h1>
            <p class="lead">
                Janis, you have some unfinished progress, check continue
                learning now.
            </p>
        </div>

        <div class="course-cover">
            <div class="course" v-for="i in times">
                <div class="top">
                    <h4 class="name">OLED complete guide for begginers</h4>
                    <p class="points">+10</p>
                </div>
                <router-link :to="'/product_knowledge'" class="link">
                    <a>Continue</a></router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        times: {
            type: Number,
            required: true
        }
    }
}
</script>
