<template>
  <div>
    <programe-description :descData="incData" v-on:showmodel_list="showmodels" />
    <short-prizes v-if="incData.type=='short_term'" :prizes="incData.prizes" />
    <comptition-bottom :couseList="incData.courses" />
    <model-list :isShow="show_modal" v-on:close_modal="close_modal()" :model="model_list" />
    <confirm v-on:confirmclose="confirmclose" :isConfirm="confirm_modal" />
  </div>
</template>
<script>
import ProgrameDescription from "~/components/incentive/competition/description";
import ShortPrizes from "~/components/incentive/competition/short_term_prizes";
import ModelList from "~/components/incentive/competition/model_list";
import ComptitionBottom from "~/components/incentive/competition/bottom_list";
import Confirm from "~/components/incentive/competition/confirm";
import { mapState } from "vuex";

export default {
  components: {
    ProgrameDescription,
    ShortPrizes,
    ComptitionBottom,
    ModelList,
    Confirm
  },

  beforeRouteLeave(to, from, next) {
    if (!this.gonext) {
      this.confirm_modal = false;
      this.route = to.name;
      return false;
    } else {
      next();
    }
  },
  computed: {
    ...mapState({
      gonext: state => state.incentive.gonext
    })
  },
  data() {
    return {
      incData: {},
      show_modal: true,
      model_list: [],
      confirm_modal: true,
      isEditing: true,
      route: ""
    };
  },
  async asyncData({ redirect, store, params }) {
    try {
      const { data } = await store.dispatch(
        "incentive/getIncentive",
        params["id"]
      );
      store.commit("incentive/setPrevSubmission", data.submissions);
      store.commit("incentive/setId", params["id"]);
      store.commit("incentive/updatemodelList", data.models);
      return {
        incData: data
      };
    } catch (e) {}
  },
  methods: {
    showmodels(value) {
      this.model_list = value;
      this.show_modal = false;
    },

    close_modal() {
      this.show_modal = true;
    },

    confirmclose(value) {
      if (value == "yes") {
        this.$store.commit("incentive/setGonext", true);

        this.$router.replace({ name: this.route });
      }
      this.confirm_modal = true;
    }
  }
};
</script>
