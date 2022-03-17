<template>
  <component :is="selectedComponent" v-bind="membersProps" />
</template>

<script setup>
import CompanyMembers from "./CompanyMembers.vue";

const selectedComponent = CompanyMembers;

const membersProps = {
  // memberTextAs: "",
  // membersIntro: "",
  // members: [
  //   {
  //     memberName: {},
  //     memberProfileLink: {},
  //     memberImageURL: {},
  //   },
  // ],
};
</script>
