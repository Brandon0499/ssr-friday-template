<template>
  <component :is="selectedComponent" v-bind="marketingProps"></component>
</template>

<script setup>
import MarketingSection from "./MarketingSection.vue";

const selectedComponent = MarketingSection;

const marketingProps = {
  // whyUsText: "",
  // reasons: [
  //   {
  //     reasonTitle: "",
  //     reasonParagraph: "",
  //   },
  // ],
};
</script>
