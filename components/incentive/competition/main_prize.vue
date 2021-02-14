<template>
  <div class="main_prize mb-4">
    <div class="prize_pic">
      <img :src="mainPrize.image_url" />
    </div>

    <div class="text-center">
      <p class="prize_tag">Main-prize</p>
      <p>{{mainPrize.title}}</p>
      <a href="#prizes" v-smooth-scroll class="loadprize">See all prizes</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainPrize: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      show_winner_modal: true
    };
  },
  methods: {
    showmodal() {
      this.show_winner_modal = false;
    },
    close_modal() {
      this.show_winner_modal = true;
    }
  }
};
</script>