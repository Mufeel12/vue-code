<template>
    <div class="start">
        <div class="row">
            <div class="col-md-12 col-12">
                <h1 class="heading mb-4">Your incentives</h1>
            </div>
        </div>
        <h2 v-if="!incentives.length">Currently you don't have active incentive</h2>
        <div class="box mt-4" v-if="incentives.length" v-for="incentive in incentives"
             :key="incentive.id">
            <div class="row">
                <div class="col-lg-3 col-12 border1">
                    <div class="inner-box">
                        <div class="mark-lable" v-if="incentive.isnew">NEW!</div>
                        <img :src="incentive.image_url" class="img-fluid" alt="product-img"/>
                    </div>
                </div>

                <div class="col-lg-6 col-12 border2">
                    <div class="content-box">
                        <div class="p-child-box">
                            <h3>{{ incentive.title }}</h3>
                            <p class="incentive-progress" v-if="incentive.type === 'short_term'">
                                Incentive progress: <b>{{ incentive.quantity_left }} of {{
                                incentive.quantity_total }} left</b>
                            </p>
                            <p class="incentive-progress" v-else>
                                Incentive ending in: <b>{{ incentive.incentive_end_in_days }}</b>
                            </p>
                            <div class="model-desc" v-html="incentive.preview_description"></div>
                            <a href="javascript:" v-if="incentive.type == 'short_term'">
                                <p class="filename" @click="showModelList(incentive.models)">
                                    <img src="~/assets/images/incentive/book.jpeg"/>List of models
                                    participating
                                </p>
                            </a>
                        </div>
                        <nuxt-link :to="`/incentive/${incentive.id}`" class="purchase-btn">
                            Submit Purchase
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-lg-3 col-12 border3" v-if="incentive.type == 'long_term'">
                    <div class="table-box">
                        <h4>Leaderboard:</h4>
                        <table class="table table-borderless">
                            <tbody>

                            <tr v-for="user in incentive.leader_board"
                                :class="{'current-user': user.is_current_user, 'is-last': user.place > incentive.leader_board.length}">
                                <td>{{ user.place }}. {{ user.name }}</td>
                                <td>
                                    <p>{{ user.points }}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-3 col-12 border3" v-if="incentive.type == 'short_term'">
                    <div class="table-box">
                        <h4>Results:</h4>
                        <table class="table table-borderless">
                            <tbody>
                            <tr>
                                <td>You have sold:</td>
                                <td>
                                    <p class="burgundy">{{ incentive.results.sold }}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>You have earned:</td>
                                <td>
                                    <p class="burgundy">{{ incentive.results.points }}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ModelList from "~/components/incentive/competition/model_list";

    export default {
        components: {ModelList},
        props: {
            incentives: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                data: [
                    {
                        new: false,
                        file: false
                    },
                    {
                        new: true,
                        file: false
                    },
                    {
                        new: false,
                        file: true
                    }
                ],
                model_list: [],
                show_modal: false
            };
        },
        methods: {
            close_modal() {
                this.show_modal = true;
            },
            showModelList(data) {
                const date = this.$store.dispatch("incentive/updateModelListData", data);
                this.$emit("showmodel_list", data);
            },
            closemodal() {
                this.$emit("close_modal");
            },
            getdateTime(endDate) {
                let now = new Date();
                let delta = (new Date(endDate).getTime() - now.getTime()) / 1000;
                let leftTime = "";
                let days = Math.floor(delta / 86400);
                delta = days * 86400;
                leftTime = days + " days ";
                let hours = Math.floor(delta / 3600) % 24;
                delta = hours * 3600;
                leftTime = leftTime + hours + " hours ";
                let minutes = Math.floor(delta / 60) % 60;
                delta = minutes * 60;
                leftTime = leftTime + minutes + " minutes ";

                return leftTime;
            }
        }
    };
</script>
