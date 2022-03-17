<template>
  <component :is="selectedComponent" v-bind="mainTitleProps"></component>
</template>

<script setup>
import MainTitleSection from "./MainTitleSection.vue";

const selectedComponent = MainTitleSection;

const mainTitleProps = {
  // companyActivityTitle: "",
  // emojiURL: "",
  // joinButtonText: "",
  // learnMoreText: "",
  // bannerWords: [],
};
</script>
