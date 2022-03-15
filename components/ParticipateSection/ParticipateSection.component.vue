<template>
  <component :is="selectedComponent"></component>
</template>

<script>
import ParticipateSection from "./ParticipateSection.vue";
export default {
  data() {
    return {
      selectedComponent: "ParticipateSection",
    };
  },
  components: {
    ParticipateSection,
  },
};
</script>
