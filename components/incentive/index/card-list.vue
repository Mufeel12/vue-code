<template>
    <div class="start">
        <div class="row">
            <div class="col-md-12 col-12">
                <h1 class="heading mb-5">{{ title }}</h1>
            </div>
            <div class="col-lg-6 col-12" v-if="description">
                <h4>
                    {{ description }}
                </h4>
            </div>
        </div>
        <div class="container-fluid content-row">
            <div class="row mt-4">
                <template v-for="incentive in incentives">
                    <incentive :incentive="incentive" :isUpcoming="isUpcoming" :key="incentive.id"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Incentive from "~/components/incentive/index/incentive-card";

    export default {
        components: {Incentive},

        props: {
            isUpcoming: {
                type: Boolean,
                default: false
            },
            incentives: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            }
        }
    };
</script>
