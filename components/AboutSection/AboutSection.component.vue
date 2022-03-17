<template>
  <component :is="selectedComponent" v-bind="aboutProps" />
</template>

<script setup>
import AboutSection from "./AboutSection.vue";

const selectedComponent = AboutSection;

const aboutProps = {
  companyFullName: "testing!!!",
  companySlogan: "testing!!!",
  companySummary: "testing!!!",
  statistics: [
    {
      statisticNumbers: 22,
      statisticFor: "hello",
    },
  ],
  sponsors: [
    {
      sponsorImageURL: {},
    },
  ],
};
</script>
