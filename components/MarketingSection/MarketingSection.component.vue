<template>
  <component :is="selectedComponent"></component>
</template>

<script>
import MarketingSection from "./MarketingSection.vue";
export default {
  data() {
    return {
      selectedComponent: "MarketingSection",
    };
  },
  components: {
    MarketingSection,
  },
};
</script>
