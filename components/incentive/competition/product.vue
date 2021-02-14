<template>
    <div class="col-md-6 col-lg-4">
        <div class="product">
            <div class="border-box mb-1">
                <img :src="(prize)?prize.image_url:''" />
            </div>
            <p class="sm_size mb-0">
                {{(prize)?prize.title:''}}
            </p>
            <p class="burgundy  mb-5">
                {{(prize)?prize.points:0}} Points
            </p>
        </div>
    </div>
</template>
 <script>
 
export default {
 
  props: {
    prize: {
      type: Object,
      default: null
    }
  }
};
</script>
