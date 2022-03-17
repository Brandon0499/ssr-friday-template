<template>
  <component :is="selectedComponent" v-bind="eventProps" />
</template>

<script setup>
import CompanyEvents from "./CompanyEvents.vue";

const selectedComponent = CompanyEvents;

const eventProps = {
  // events: [
  //   {
  //     eventPageLink: "",
  //     eventName: "",
  //     eventImageLink: "",
  //     eventSummary: "",
  //   },
  // ],
};
</script>
