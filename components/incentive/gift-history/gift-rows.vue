<template>
    <div class="gift-row">
        <div class="back mb-5">
            <div class="row">
                <div class="col-md-12">
                    <img src="~/assets/images/article/thumbnail-1.svg" class="icon" />
                    <nuxt-link :to="{ name: 'gifts' }" class="btn btn-link bc-btn">Back</nuxt-link>
                </div>
            </div>
        </div>
        <div class="header mb-5 mt-4">
            <h2 class="heading">Your gift history:</h2>
        </div>
        <template v-for="row in historyData">
            <model-row :row="row" :key="row.id" />
        </template>
    </div>
</template>

<script>
import ModelRow from "~/components/incentive/gift-history/model-row";
import {mapActions,mapState} from 'vuex';
export default {
    components: { ModelRow },
    computed: {
            ...mapState({
                historyData: state => state.historyData
            })
     },
    methods: {
     ...mapActions['giftHistory']
    },
    mounted() {
        
    }
};
</script>
