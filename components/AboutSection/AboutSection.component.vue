<template>
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import AboutSection from "./AboutSection.vue";

export default {
  data() {
    return {
      selectedComponent: "AboutSection",
    };
  },
  components: {
    AboutSection,
  },
};
</script>
