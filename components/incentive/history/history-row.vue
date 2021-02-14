<template>
  <div class="history mt-4">
    <div class="row">
      <div class="col-md-4 col-lg-2 col-12 border-right">
        <div class="history-image">
          <img src="~/assets/images/incentive/mobile.jpg" />
        </div>
      </div>
      <div class="col-md-4 col-lg-4 pdt-2">
        <h2>Main quarter incentive program</h2>
        <p>Long term incentive Ended on</p>
      </div>

      <div class="col-md-4 col-lg-2 col-4 pdt-2 text_center">
        <p>Your position:</p>
        <p class="date">9.</p>
      </div>
      <div class="col-md-3 col-lg-2 col-4 pdt-2 text_center">
        <p>Your result:</p>
        <p class="date">1</p>
      </div>
      <div class="col-md-4 col-lg-2 col-4 pdt-2 text_center">
        <p>Winners:</p>
        <a href="javascript:" class="download-link" @click="showWinnerList()">See List</a>
      </div>
    </div>
    <winner-list :isShow="show_winner_modal" v-on:close_modal="close_modal()" />
  </div>
</template> 
<script>
import WinnerList from "~/components/incentive/competition/winner_list";

export default {
  components: {
    WinnerList
  },
  props: {
    history: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      show_winner_modal: true,
      winnerlist: []
    };
  },
  methods: {
    showmodal() {
      this.show_winner_modal = false;
    },
    close_modal() {
      this.show_winner_modal = true;
    },
    showWinnerList(data) {
      this.show_winner_modal = false;
      this.winnerlist = data;
    }
  }
};
</script>