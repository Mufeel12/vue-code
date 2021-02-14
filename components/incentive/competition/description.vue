<template>
  <div class="description">
    <div class="row mb-5">
      <div class="col-md-12">
        <img src="~/assets/images/article/thumbnail-1.svg" class="icon" />
        <nuxt-link
          :to="{ name: 'incentive.all' }"
          class="btn btn-link bc-btn"
        >Back to incentive programs</nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-12">
        <h1 class="bold_heading mb-4">{{descData.title}}</h1>
        <p>
          <span>Short term incentive</span>
          <span class="grey padd-15">{{descData.incentive_end_in_days}}</span>
          <span class="green">
            Retail deals only
            <img
              src="~/assets/images/incentive/question.jpg"
              class="img-fluid"
              alt="product-img"
            />
          </span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <div class="join_div mb-4" v-if="!showForm && !descData.has_joined_incentive">
          <div class="row">
            <div class="col-md-8">
              <div class="mt-3">
                <h3 class="medium_text">Join incentive program Now!</h3>
              </div>
            </div>
            <div class="col-md-4">
              <a href="javascript:" class="red_btn" @click="joinIncentive(descData.id)">Join</a>
            </div>
          </div>
        </div>
        <div class="joinform" v-if="showForm || descData.has_joined_incentive">
          <submission :models="descData" />
        </div>
        <div class="product_content_box">
          <h2 class="mb-4 heading">Incentive program description</h2>
          <p class="headtext mb-4">
            By storing your food well, you can make is last longer as well as maintaing
            the best taste and tempersture. Find out how.
          </p>
          <div class="mb-5">
            <p>
              Whether you’re a carnivore, pescatarian, vegetarian or vegan, the quite
              stunning array of food we now.
            </p>
            <a
              v-if="descData.type=='short_term'"
              href="javascript:"
              @click="showModelList(descData.models)"
            >
              <p class="filename">
                <img src="~/assets/images/incentive/book.jpeg" />List of models
                participating
              </p>
            </a>
          </div>
          <div class="form-heading">
            <h3 class="medium_text">Participation rules:</h3>
            <div class="rules" v-html="descData.rules"></div>
          </div>
        </div>

        <hr class="mb-60" />
        <long-term-prizes v-if="descData.type=='long_term'" :prizeList="descData.prizes" />
      </div>
      <div class="col-lg-4 col-md-12">
        <process-result :result="descData.results" />
        <main-prize
          v-if="descData.type=='long_term'"
          :mainPrize="(descData.prizes && descData.prizes[0])? descData.prizes[0]:null"
        /> 
      </div>
    </div>
  </div>
</template>
<script>
import Submission from "~/components/incentive/competition/submission";
import LongTermPrizes from "~/components/incentive/competition/long_term_prizes";
import MainPrize from "~/components/incentive/competition/main_prize";
import AllPrize from "~/components/incentive/competition/allprize";
import ModelList from "~/components/incentive/competition/model_list";
import Confirm from "~/components/incentive/competition/confirm";
import ProcessResult from "~/components/incentive/competition/process_result";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    descData: {
      type: Object,
      default: null
    }
  },
 
  components: {
    Submission,
    MainPrize,
    LongTermPrizes,
    AllPrize,
    ModelList,
    Confirm,
    ProcessResult
  },
  data() {
    return {
      isConfirm: true,
      showForm: false,
      mainPrize: {},
    };
  },

  methods: {
    closeConfirmModel() {
      this.isConfirm = true;
    },
    getdateTime(endDate) {
      const now = new Date();
      let delta = (new Date(endDate).getTime() - now.getTime()) / 1000;
      let leftTime = "";
      const days = Math.floor(delta / 86400);
      delta = days * 86400;
      leftTime = days + " days ";
      let hours = Math.floor(delta / 3600) % 24;
      delta = hours * 3600;
      leftTime = leftTime + hours + " hours ";
      let minutes = Math.floor(delta / 60) % 60;
      delta = minutes * 60;
      leftTime = leftTime + minutes + " minutes ";

      return leftTime;
    },
    async joinIncentive(id) {
      const data = await this.$store.dispatch("incentive/joinIncentive", id);
      this.showForm = true;
      if (data && data.success) {
        this.showForm = true;
      }
    },
    showModelList(data) {
      this.$emit("showmodel_list", data);
    },
    closemodal() {
      this.$emit("close_modal");
    },
    closeConfirmModel() {
      this.isConfirm = true;
    }
  }

};
</script>
