<template>
  <div class="previous_submission mt-4" v-if="prevSubs.length">
    <h2 class="heading mb-4">Previous submissions</h2>
    <p>
      Whether you’re a carnivore, pescatarian, vegetarian or vegan, the quite stunning array
      of food we now eat has made knowing exactly.
    </p>
    <div class="table-responsive submission-table">
      <table class="table">
        <thead>
          <tr>
            <th>Submission date</th>
            <th>Check number</th>
            <th>Points</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(val,index) in prevSubs">
            <tr v-if="!isSeeAll || index<limit" :key="val.id">
              <td>{{ val.date }}</td>
              <td>{{ val.serial_number }}</td>
              <td>{{ val.points }}</td>
              <td>
                <div>
                  <a
                    class="status_btn"
                    href="javascript:"
                    :class="val.status"
                  >
                    {{ val.status }}
                    <tooltip v-if="(val.status=='declined')"
                      :data="{heading:'Submission declined',desc:'Invalid or inactive serial number Please try again'}"
                    />
                  </a>
                </div>
              </td>
              <td>
                <a href="javascript:" class="cancel">Cancel</a>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="seeall">
        <a href="javascript:" class="cancel" @click="seeAll()" v-if="isSeeAll">See All</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tooltip from "~/components/incentive/competition/tooltip";

export default {
  components: {
    Tooltip
  },
  computed: {
    ...mapState({
      prevSubs: state => state.incentive.prevSubs
    })
  },
  data(){
      return {
        limit:3,
        isSeeAll: this.prevSubs > 3
      }
  },
  methods:{
    seeAll(){
      this.limit = this.prevSubs.length;
      this.isSeeAll = false;
    }
  },
  mounted() {
      this.isSeeAll = true;
  }
};
</script>
