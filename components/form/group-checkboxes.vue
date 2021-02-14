<template>
    <div class="group-checkboxes">
        <div class="group-form-title">{{ title }}</div>

        <div class="group-cover">
            <template v-if="hasAllButton">
                <button
                    class="btn"
                    :class="[allIsChecked ? 'btn-primary' : 'btn-light']"
                    @click="checkAll"
                >
                    All
                </button>
            </template>
            <template v-for="option in options">
                <div
                    class="group-checkbox"
                    :key="`${option.name}-${option.value}`"
                >
                    <input
                        :id="`gp-${option.value}-${option.name}`"
                        type="checkbox"
                        name="form-checkbox"
                        @change="toggle"
                        v-model="checkedOptions"
                        :value="option.value"
                    />
                    <label
                        :for="`gp-${option.value}-${option.name}`"
                        class="group-check-label"
                        >{{ option.name }}</label
                    >
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Array,
                default() {
                    return []
                }
            },

            hasAllButton: {
                type: Boolean,
                default: false,
            },

            title: {
                type: String,
                default: ''
            },

            options: {
                type: Array,
                default() {
                    return [
                        {
                            name: '',
                            value: '',
                        }
                    ]
                }
            },
            allIsChecked: {
                type: Boolean,
                default: true,
            }
        },

        data() {
            return {
                checkedOptions: [],
            }
        },

        methods: {
            toggle() {
                this.$emit('update:value', this.checkedOptions)
                if(this.allIsChecked === true) {
                    this.$emit('update:allIsChecked', false)
                }
            },
            checkAll() {
                this.$emit('update:value', this.checkedOptions)
                this.$emit('update:allIsChecked', true)
            }
        },
        watch: {
            allIsChecked: {
                immediate: true,
                deep: true,
                handler(newValue) {
                    if(newValue) {
                        this.checkedOptions = [];
                        this.$emit('update:value', [])
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.group-cover {
    display: flex;
    flex-wrap: wrap;
    margin: -6px -4px;
}

.group-form-title {
    margin-bottom: 11px;
    color: $grey-2;
}

.group-checkbox {
    position: relative;
    margin: 6px 4px;

    input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        pointer-events: none;

        &:checked + .group-check-label {
            border-color: $burgundy;
            background-color: $burgundy;
            color: $white;
        }
    }
}

.group-check-label {
    background-color: $white-2;
    border: 1px solid $grey-5;
    border-radius: 3px;
    display: inline-block;
    padding: 9px 15px 5px 15px;
    margin: 0;
    color: $grey-2;
    user-select: none;
    cursor: pointer;

    &:hover {
        color: $grey-3;
    }

    span {
        vertical-align: text-top;
    }
}
</style>
