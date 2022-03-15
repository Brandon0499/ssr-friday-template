<template>
  <component :is="selectedComponent"></component>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  data() {
    return {
      selectedComponent: "Navbar",
    };
  },
  components: {
    Navbar,
  },
};
</script>
