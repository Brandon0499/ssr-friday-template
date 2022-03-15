<template>
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import CompanyMembers from "./CompanyMembers.vue";

export default {
  data() {
    return {
      selectedComponent: "CompanyMembers",
    };
  },
  components: {
    CompanyMembers,
  },
};
</script>
