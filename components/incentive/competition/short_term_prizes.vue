<template>
  <div class="products mt-2">
    <div class="row">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <h2 class="heading">What You can get:</h2>
        <div class="row mt-5 mb-2">
          <template v-for="val in prizes">
            <product :prize="val" :key="val.id"/>
          </template>
        </div>
        <div class="row mb-5">
          <div class="col-md-12">
            <nuxt-link :to="{ name: 'gifts.all'}" class="btn btn-light btn-block large-button">Visit LG Master gift section</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Product from "~/components/incentive/competition/product";

export default {
  components: {
    Product
  },
  props: {
    prizes: {
      type: Array,
      default: []
    }
  }
};
</script>
