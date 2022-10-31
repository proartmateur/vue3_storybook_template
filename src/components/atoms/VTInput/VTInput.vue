<template>
  <div :class="variantStyle">
    <label v-if="showLabel" :for="inputId">{{ props.label }}</label>
    <input
        :class="variantStyle"
        :id="inputId"
        :value="text"
        :placeholder="props.label"
        @input="event => text = event.target.value"
        type="text"
    >
    <small v-show="showErrorMessage">Error: {{ errorMessage }}</small>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue';
import {InputVariants} from './enums';


const emit = defineEmits(['inFocus', 'input', 'update:value'])

const text = ref('')

const props = defineProps<{
  id?: string
  label?: string
  value: string
  placeholder: string
  errorMessage: string
  hasLabel: boolean
  variant: string
}>()

const inputId = computed(() => {
  return `${props.id}_vt_input`
})

const showLabel = computed(() => {
  return props.hasLabel
})
const showErrorMessage = computed(() => props.errorMessage !== '' && props.errorMessage !== undefined)

const variantStyle = computed((): string => {
  if (props.variant === InputVariants.Small) {
    return "vt-input vt-input-small"
  }
  return "vt-input"
})
onMounted(() => {
  text.value = props.value

})

watch(text, async (newVal, oldVal) => {
  emit('update:value', newVal)
})

watch(() => props.value, (newVal, oldVal) => {
  text.value = newVal
});

</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_colors.scss';

.vt-input {
  // border: 1px solid tomato;
  display: flex;
  width: 100%;

  input {
    height: 86px;
    font-size: 24px;
    padding: 0 22px;
    border-radius: 0;
    background-color: #fff;
    border: none;

    &:focus-visible {
      outline: 3px solid #0095B7;
    }
  }
}

.vt-input-small {

  input {
    height: 24px !important;
    font-size: 16px !important;
    padding: 0 22px !important;
    border: 1 pz solid $purple !important;
  }
}

</style>
