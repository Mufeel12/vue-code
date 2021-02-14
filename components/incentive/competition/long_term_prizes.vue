<template>
  <div class="prizes mt-5 mb-5" id="prizes">
    <h2 class="heading">Prizes:</h2>
    <div class="row mb-60">
      <div class="col-lg-4 col-md-6 prize_box smallbox">
        <div class="prize-img">
          <img :src="secondPrize.image_url" />
        </div>

        <div class="border-box white mh">
          <p>
            Prize for 2nd place
            <br />
          </p>
          <span>{{secondPrize.title}}</span>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 big_box">
        <div class="prize-img">
          <img :src="firstPrize.image_url" />
        </div>
        <div class="border-box yellow mh_2">
          <p>
            Prize for 1st place
            <br />
          </p>
          <span>{{firstPrize.title}}</span>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 prize_box burgundy smallbox">
        <div class="prize-img">
          <img :src="thirdPrize.image_url" />
        </div>

        <div class="border-box mh">
          <p>
            Prize for 3rd place
            <br />
          </p>
          <span>{{thirdPrize.title}}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <template v-for="(val, index) in prizeList">
        <div class="col-md-6" :key="val.id" v-if="index>2">
          <div class="content-section">
            <div class="number">
              <p>{{(index+1)}}</p>
            </div>
            <div class="right-section">
              <div class="box-heading">
                <h3>Prize for {{index+1}}th place</h3>
                <p>{{val.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prizeList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      firstPrize: {},
      secondPrize: {},
      thirdPrize: {}
    };
  },
  mounted() {
    console.log(this.prizeList);
    this.firstPrize = this.prizeList[0] ? this.prizeList[0] : {};
    this.secondPrize = this.prizeList[1] ? this.prizeList[1] : {};
    this.thirdPrize = this.prizeList[2] ? this.prizeList[2] : {};
  }
};
</script>