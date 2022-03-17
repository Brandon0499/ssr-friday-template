<template>
  <component :is="selectedComponent" v-bind="participateProps"></component>
</template>

<script setup>
import ParticipateSection from "./ParticipateSection.vue";
const selectedComponent = ParticipateSection;

const participateProps = {
  // participateMethod: "",
  // participateDetails: "",
  // participateBtnText: "",
};
</script>
