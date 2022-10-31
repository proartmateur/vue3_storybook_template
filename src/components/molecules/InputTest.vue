<template>
  <div>
    <h1>Input Test {{val}}</h1>
    <VTInput
        label="Name"
        id="name" placeholder="Write your name"
        error-message="nonono!"
        v-model:value="val"></VTInput>
  </div>
</template>

<script setup lang="ts">
import VTInput from '../atoms/VTInput/VTInput.vue'
import {ref} from "vue";

const val = ref('')

</script>

<style scoped>

</style>
