<template>
    <div class="blog-container">
        <div class="row">
            <div class="col-md-9 col-12">
                <h1 class="title">{{data.title}}</h1>
                <p class="date">{{data.date}}</p>
            </div>
            <div class="col-md-3 col-12">
                <div class="point-container" v-if="data.test_id">
                    <div class="points_box mt-2">
                        <p>{{data.time_to_read}} Minute read</p>
                        <template v-if="data.is_test_completed">
                            <h3>{{data.points_earned}} Earned points</h3>
                        </template>
                        <template v-else>
                            <h3>+ {{data.points}} Points</h3>
                        </template>
                        <template v-if="data.is_test_completed">
                            <p><a href="#" @click="startTest">Review quiz</a></p>
                        </template>
                        <template v-else>
                            <p><a href="#" @click="startTest">Complete quiz</a></p>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9 col-12">
                <div class="row blog-data" v-for="val in data.widgets">
                    <div class="col-md-9 col-12">
                        <ul v-if="val.type==='list'">
                            <li v-for="item in val.items" v-html="item"></li>
                        </ul>
                        <span v-if="val.type==='heading'" v-html="val.text">-{{val.text}}-</span>
                        <p v-if="val.type==='text'" v-html="val.text"
                           :class="{ 'small-text': val.size_type === 'small', 'h-txt': val.size_type === 'large'}">
                        </p>
                        <div class="mb-3" v-if="val.type==='image'">
                            <img :src="val.path" alt="post" class="img-fluid">
                        </div>
                        <div class="video" v-if="val.type==='video'">
                            <video-player :src="val.src"/>
                        </div>
                    </div>
                    <div class="col-md-3 col-12" v-if="val.addition" :style="val.type === 'heading' ? 'margin-top: 50px;' : ''">
                        <div class="additional_data mt-2" v-html="val.addition">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import videoPlayer from '~/components/videoPlayer'
    import {mapActions} from "vuex";

    export default {
        components: {videoPlayer},
        props: {
            data: {
                type: Object,
                required: true
            },
        },
        methods: {
            ...mapActions('quiz', ['startQuiz']),
            startTest() {
                if (!this.data.test_id) {
                    return;
                }
                this.$store.commit('quiz/setId', this.data.test_id);
                this.startQuiz({testId: this.data.test_id, $axios: this.$axios}).then(() => {
                    this.$router.push({path: '/training/quiz'});
                });
            }
        }

    }

</script>
