<template>
  <component :is="selectedComponent"></component>
</template>

<script>
import MainTitleSection from "./MainTitleSection.vue";
export default {
  data() {
    return {
      selectedComponent: "MainTitleSection",
    };
  },
  components: {
    MainTitleSection,
  },
};
</script>
