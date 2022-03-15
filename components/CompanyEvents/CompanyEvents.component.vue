<template>
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import CompanyEvents from "./CompanyEvents.vue";

export default {
  data() {
    return {
      selectedComponent: "CompanyEvents",
    };
  },
  components: {
    CompanyEvents,
  },
};
</script>
