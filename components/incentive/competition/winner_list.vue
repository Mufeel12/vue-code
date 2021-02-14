<template>
  <div class="winner_list">
    <div class="modal bd-lg-modal-xl" :class="{ show: !isShow }">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header mt-5">
            <h2 class="heading mb-4">Winner List</h2>
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
            <div class="row mb-5">
              <div class="col-md-6">
                <div class="all_prize mt-1">
                  <div class="list-header">
                    <p class="mb-1">
                      <span class="small-box ">Position</span> 
                      <span class="float-right price">score</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no circle-box yellow">1</span> janis:
                      <span class="float-right price">10</span>
                    </p>
                  </div>

                  <div class="list-box">
                    <p>
                      <span class="serial-no circle-box grey">2</span> Leva:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no circle-box burgundy">3</span> Leoninds:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no">4</span> Agris:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no">5</span> Jurgis:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="all_prize mt-1">
                  <div class="list-header">
                    <p class="mb-1">
                      <span class="small-box">Position</span> 
                      <span class="float-right price">score</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p class="mb-1">
                      <span class="serial-no circle-box yellow">1</span> janis:
                      <span class="float-right price">10</span>
                    </p>
                  </div>

                  <div class="list-box">
                    <p>
                      <span class="serial-no circle-box grey">2</span> Leva:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no circle-box burgundy">3</span> Leoninds:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no">4</span> Agris:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                  <div class="list-box">
                    <p>
                      <span class="serial-no">5</span> Jurgis:
                      <span class="float-right price">10</span>
                    </p>
                  </div>
                </div>
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
    isShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closemodal() {
      this.$emit("close_modal");
    }
  },
  mounted() {
    console.log(this.isShow);
  }
};
</script>
