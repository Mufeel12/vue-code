import Vue from 'vue'

import FieldInput from '~/components/form/field-input'
import FieldSelect from '~/components/form/field-select'
import FieldCheckbox from '~/components/form/field-checkbox'
import FormButton from '~/components/form/form-button'

export default function installComponents() {
  Vue.component('field-input', FieldInput)
  Vue.component('field-select', FieldSelect)
  Vue.component('field-checkbox', FieldCheckbox)
  Vue.component('form-button', FormButton)
}
