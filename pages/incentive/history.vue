<template>
  <div>
    <history-list :historyData="data" />
  </div>
</template>

<script>
import HistoryList from "~/components/incentive/history/history-list";

export default {
  components: { HistoryList },
  async asyncData({ redirect, store, params }) {
    try {
      const { data } = await store.dispatch("incentive/getIncentiveHistory");
      return {
        data: data
      };
    } catch (e) {}
  },
  data(){
    return {
      data:[]
    }
  }
};
</script>
