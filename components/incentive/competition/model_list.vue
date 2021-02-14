<template>
  <div class="focus_model">
    <div
      class="modal bd-lg-modal-xl"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
      :class="{ show: !isShow }"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="fade show models_list" tabindex="-1" role="dialog">
            <div class="modal-header mt-5">
              <h2 class="heading mb-4">Focus Model Participating</h2>
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
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="focus_model_body mb-5">
                    <div class="table-responsive model-table">
                      <table class="table">
                        <thead>
                          <tr>
                            <td scope="col">MODEL NUMBER</td>
                            <td scope="col">PRODUCT NAME</td>
                            <td scope="col">QYT PARTICIPATING</td>
                            <td scope="col">QYT LEFT</td>
                            <td scope="col">REWARD PER UNIT</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="val in model" :key="val.id">
                            <td scope="row">{{val.model_number}}</td>
                            <td>{{val.product_name}}</td>
                            <td>{{val.quantity}}</td>
                            <td>{{val.quantity_left}}</td>
                            <td>{{val.points_per_unit}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
    },
    model:{
      type:Array,
      default:[]
    }
  },
  methods: {
    closemodal() {
      this.$emit("close_modal");
    }
  },
  mounted() {
       
  }
};
</script>
