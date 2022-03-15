<template>
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import CompanyAgendas from "./CompanyAgendas.vue";

export default {
  data() {
    return {
      selectedComponent: "CompanyAgendas",
    };
  },
  components: {
    CompanyAgendas,
  },
};
</script>
