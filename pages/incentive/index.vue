<template>
    <div>
        <joined-incentives :incentives="incentives"
                           v-on:showmodel_list="showModels"/>

        <card-list :incentives="runningIncentives"
                   title="Running incentive programs"
                   description="An incentive program to encourage wellness participation is an employer's purposeful strategy to incorporate incentives into its comprehensive wellness promotion program, including safety"/>

        <card-list :incentives="runningIncentives"
                   title="Upcoming incentive programs"
                   :isUpcoming="true"/>

        <model-list :isShow="show_modal"
                    v-on:close_modal="closeModal"
                    :model="model_list"/>

    </div>
</template>
<script>
    import JoinedIncentives from "~/components/incentive/index/joined-incentives";
    import CardList from "~/components/incentive/index/card-list";
    import ModelList from "~/components/incentive/competition/model_list";

    export default {
        components: {JoinedIncentives, CardList, ModelList},

        data() {
            return {
                courses: [],
                incentives: [],
                runningIncentives: [],
                upcomingIncentives: [],
                show_modal: true,
                model_list: []
            };
        },
        methods: {
            async fetchData() {
                const response = await this.$axios.get(`incentives`);
                if (response.status === 200) {
                    const {data} = response;
                    this.incentives = data.incentives;
                    this.runningIncentives = data.running;
                    this.upcomingIncentives = data.upcoming;
                }
            },
            showModels(value) {
                this.model_list = value;
                this.show_modal = false;
            },

            closeModal() {
                this.show_modal = true;
            }
        },
        mounted() {
            this.fetchData();
        }
    };
</script>
