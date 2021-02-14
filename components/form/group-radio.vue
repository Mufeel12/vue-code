<template>
    <div class="group-radios">
        <div class="group-form-title">{{ title }}</div>

        <div class="radio-cover">
            <div :key="option.value" v-for="option in options" class="group-radio">
                <div class="checkbox-cover">
                    <input
                        :id="`radio${option.value}`"
                        :name="title"
                        :value="option.value"
                        class="custom-control-input"
                        type="radio"
                        v-model="checkedOption"
                        @change="change">
                    <div class="checkbox"></div>
                </div>

                <label class="form-control-label" :for="`radio${option.value}`">{{ option.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },

            value: {
                type: Number
            },

            options: {
                type: Array,
                default() {
                    return [
                        {
                            name: '',
                            value: ''
                        }
                    ]
                }
            }
        },

        data() {
            return {
                checkedOption: null
            }
        },

        methods: {
            change(event) {
                this.$emit('update:value', this.checkedOption)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group-form-title {
        margin-bottom: 13px;
        color: $grey-2;
    }

    .group-radio {
        display: flex;

        + .group-radio {
            margin-top: 20px;
        }
    }

    .checkbox-cover {
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 12px;

        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            z-index: 1;

            &:checked + .checkbox {
                border-color: $burgundy;
                border-width: 6px;
            }
        }
    }

    .form-control-label {
        cursor: pointer;
        color: $grey-2;
        margin: 0;
        position: relative;
        top: 3px;
    }

    .checkbox {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: 1px solid $dusty-gray;
        transition: all .2s;
    }
</style>
