<template>
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import Footer from "./Footer.vue";

export default {
  data() {
    return {
      selectedComponent: "Footer",
    };
  },
  components: {
    Footer,
  },
};
</script>
