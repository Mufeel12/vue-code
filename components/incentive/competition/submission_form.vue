<template>
  <div class="form-section" :class="{submitting_submission:submitting}">
    <h2 class="heading mb-4 mt-4">Submit a purchase</h2>
    <form ref="form">
      <div class="form-group form_group">
        <div class="row">
          <template v-for="i in count">
            <div class="col-md-6">
              <div class="group">
                <FieldSelect
                  :placeholder="'Choose Model'"
                  @input="enbaleSubmit(i)"
                  name="model_number"
                  :options="options"
                  v-model="submissionData[i-1].model_number"
                />
              </div>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                name="submissions"
                @input="enbaleSubmit(i)"
                v-model="submissionData[i-1].serial_number"
                required
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Serial Number</label>
            </div>
            <div class="col-md-12">
              <div class="upload_document">
                <label :for="`upload_file_${i}`">
                  <img src="@/assets/images/incentive/upload_img.JPG" /> Upload purchase document
                </label>
                <input
                  type="file"
                  class="custom_file"
                  ref="image"
                  name="submissions"
                  :id="`upload_file_${i}`"
                  @change="handleImageUpload(i-1)"
                />
              </div>
            </div>
          </template>
        </div>
        <div class="addmore">
          <a href="javascript:" @click="addmore">Add more</a>
        </div>
        <div class="submit-div">
          <button
            type="button"
            class="btn btn-primary"
            @click="submitSubmission()"
            :disabled="disable || submitting"
          >Submit purchase</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import FieldSelect from "~/components/form/field-select";
import { mapState } from "vuex";

export default {
  components: {
    FieldSelect
  },

  computed: {
    ...mapState({
      models: state => state.incentive.modelList,
      incentiveId: state => state.incentive.incentiveId
    })
  },
  data() {
    return {
      count: 1,
      options: [],
      disable: true,
      submissionData: [{ model_number: "", serial_number: "", image: null }],
      submitting: false,
      image: []
    };
  },
  methods: {
    addmore() {
      if (this.count < 10) {
        this.count = this.count + 1;
        this.submissionData.push({ model_number: "", serial_number: "", image: null  });
      }
    },
    enbaleSubmit(i) {
      if (
        this.submissionData[0].model_number != "" ||
        this.submissionData[0].serial_number != ""
      ) {
        this.$store.commit("incentive/setGonext", false);

        this.disable = false;
      } else {
        this.disable = true;
        this.$store.commit("incentive/setGonext", true);
      }
    },
    async submitSubmission() {
      this.submitting = true;
      let submitData = [];
      let input = new FormData();
      console.log(this.submissionData)
      for (let index = 0; index < this.submissionData.length; index++) {
        const val = this.submissionData[index];
        input.append(`submissions[${index}][serial_number]`, val.serial_number);
        input.append(
          `submissions[${index}][model_number]`,
          val.model_number.code
        );
        input.append(`submissions[${index}][image]`, val.image);
      }
      const data = await this.$store.dispatch("incentive/submitSubmission", {
        id: this.incentiveId,
        data: input
      });
      this.submitting = false;
      if (data && (data.status == 201 || data.status == 200)) {
        this.$store.commit("incentive/setPrevSubmission", data.data);
      }
      this.initialize();
    },
    handleImageUpload(i) {
      this.submissionData[i].image = this.$refs.image[i].files[0];
    },
    initialize(){
      this.count = 1;
      this.$store.commit("incentive/setGonext", true);
      this.submissionData = [{ model_number: "", serial_number: "", image: null }]
    }
  },
  mounted() {
    this.$store.commit("incentive/setGonext", true);
    if (this.models) {
      for (let val of this.models) {
        this.options.push({ label: val.model_number, code: val.id });
      }
    }
  }
};
</script>
