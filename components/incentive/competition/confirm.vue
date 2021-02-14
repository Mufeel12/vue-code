<template>
  <div class="confirm_model">
    <div
      class="modal bd-lg-modal-xl"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
      :class="{ show: !isConfirm }"
    >
      <div class="modal-dialog  modal-lg">
        <div class="modal-content">
          <div class="fade show models_list" tabindex="-1" role="dialog">
            <div class="modal-header mt-2">
              <h2 class="heading mb-4">Are your sure</h2>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closemodal()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mb-5">
              <div class="row">
                <div class="col-md-12 col-lg-12">
                
                  <p class="mb-5">
                    Are you sure you want to quit, no program will be saved. Lorem ipsum
                    <br />dolor sit amend laborum
                  </p>
                  <div class="bttn">
                    <button class="btn-red mb-2" @click="closemodal('yes')">Yes</button>
                    <button class="btn-default  mb-2" @click="closemodal('cancel')">Cancel</button>
                  </div>
                </div>
                <!--/col-md-9 col-12-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isConfirm: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closemodal(value) {
      this.$emit("confirmclose",value);
    }
  }
};
</script>


</template>