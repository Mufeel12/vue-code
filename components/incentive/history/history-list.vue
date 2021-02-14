<template>
  <div class="history-list">
    <div class="back mb-5">
      <div class="row">
        <div class="col-md-12">
          <img src="~/assets/images/article/thumbnail-1.svg" class="icon" />
          <nuxt-link :to="{ name: 'gifts' }" class="btn btn-link bc-btn">Back</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header mb-5 mt-4">
      <h2 class="heading">Your incentive history:</h2>
    </div>
    <template v-for="i in 5">
      <history-row />
    </template>
    <div class="mt-5 mb-5">
      <Pagination />
    </div>
  </div>
</template>

<script>
import HistoryRow from "~/components/incentive/history/history-row";
import Pagination from "~/components/gifts/pagination";

export default {
  components: { HistoryRow, Pagination },
  props: {
    historyData: {
      type: Array,
      default: []
    }
  }
};
</script>
