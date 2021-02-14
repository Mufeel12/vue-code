<template>
    <div class="col-lg-4 col-12 mb-2">
        <div class="card h-100">
            <div class="card-body card-box d-flex align-items-start flex-column">
                <div class="image-cover">
                    <!-- <div class="mark_lable" v-if="v.new">NEW!</div> -->
                    <img :src="incentive.image_url" class="img-fluid" alt="product-img"/>
                </div>
                <div class="child-box">
                    <h3>{{incentive.title}}</h3>
                    <p class="incentive-progress" v-if="incentive.type !== 'short_term'">
                        Incentive ending in: <b>{{ incentive.incentive_end_in_days }}</b>
                    </p>
                    <p class="incentive-progress" v-else>
                        Incentive progress: <b>
                        {{ incentive.quantity_left }} of
                        {{ incentive.quantity_total }} left
                    </b>
                    </p>
                    <div class="model-desc" v-html="incentive.preview_description"></div>
                    <a href="javascript:" v-if="incentive.type == 'short_term'">
                        <p class="filename" @click="showModelList(incentive.models)">
                            <img src="~/assets/images/incentive/book.jpeg"/>List of models
                            participating
                        </p>
                    </a>
                </div>
                <div class="bottom mt-auto">
                    <nuxt-link :to="`/incentive/${incentive.id}`"
                               class="red-btn"
                               v-bind:class="{ 'coming-soon': isUpcoming }">
                        <template v-if="!isUpcoming && incentive.joined">
                            Open
                        </template>

                        <template v-else>
                            {{ isUpcoming ? 'Coming soon' : 'Join'}}
                        </template>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <model-list :isShow="show_modal" :model="model_list" v-on:close_modal="close_modal()"/>
    </div>
</template>
<script>
    import ModelList from "~/components/incentive/competition/model_list";

    export default {
        components: {ModelList},

        props: {
            incentive: {
                type: Object,
                default: null
            },
            isUpcoming: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                show_modal: true,
                model_list: []
            };
        },
        methods: {
            showmodal() {
                this.show_modal = false;
            },
            close_modal() {
                this.show_modal = true;
            },
            showModelList(values) {
                this.show_modal = false;
                this.model_list = values;
            }
        }
    };
</script>
