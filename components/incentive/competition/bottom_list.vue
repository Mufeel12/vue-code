<template>
  <div class="competition_bottom_list">
    <div class="row">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <h2 class="heading mb-4">Things are not going that well?</h2>
        <p>
          By storing your food well, you can make it last longer as well as maintaining
          the best taste and temperature. Find out how.
        </p>

        <div class="course-cover mt-4 mb-5">
          <template v-for="val in couseList">
            <template>
              <course :course="val" :isCompleted="false" :key="val.id" />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Course from "~/components/training/course";

export default {
  props: {
    couseList: {
      type: Array,
      default: null
    }
  },
  components: {
    Course
  },
  data() {
    return {
      data: {}
    };
  },
  mounted(){
    console.log(this.couseList)
  }
};
</script>
