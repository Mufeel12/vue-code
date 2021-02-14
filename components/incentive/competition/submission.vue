<template>
  <div class="form-box">
    <div class="thnk-section mb-5" v-if="!models.submissions || models.submissions.length==0">
      <div class="row">
        <div class="col-md-4">
          <img src="~/assets/images/incentive/form-img.jpg" class="thnk-img" />
        </div>
        <div class="col-md-8">
          <div class="form-heading mt-5">
            <h3>Thanks For your Joining!</h3>
            <p>
              It's time to register your first purchase! Enter the Purchase check the
              number and product price in the fields above!
            </p>
          </div>
        </div>
      </div>
    </div>
    <submission-form />
    <previous-submission />
    <!-- <confirm v-on:confirmclose="confirmclose()" :isConfirm="confirm_modal" /> -->
  </div>
</template>
<script>
import FieldInput from "~/components/form/field-input";

import PreviousSubmission from "~/components/incentive/competition/previous_submission";
import SubmissionForm from "~/components/incentive/competition/submission_form";
import Confirm from "~/components/incentive/competition/confirm";

export default {
  components: {
    FieldInput,
    PreviousSubmission,
    SubmissionForm
  },
  props: {
    models: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      count: 1,
      options: [],
      confirm_modal: true,
      disable: true,
      submissionData: [{ model_number: "", serial_number: "" }],
      model_id: "",
      serial_number: "",
      isLoading: true,
      submitting: false
    };
  },
  methods: {},
  mounted() {
    if (this.models.models) {
      for (let val of this.models.models) {
        this.options.push({ label: val.model_number, code: val.id });
      }
    }
  }
};
</script>
