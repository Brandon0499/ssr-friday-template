<template>
  <component :is="selectedComponent" v-bind="agendaProps" />
</template>

<script setup>
import CompanyAgendas from "./CompanyAgendas.vue";

const selectedComponent = CompanyAgendas;

const agendaProps = {
  // singleAgendas: [
  //   {
  //     day: "1",
  //     date: "25",
  //     agendaSchedules: [],
  //   },
  // ],
  // agendaTitle: "",
  // agendaSummary: "",
  // showHiddenDetails: false,
  // peopleInCharge: [
  //   {
  //     imageURL: "",
  //     name: "",
  //     position: "",
  //   },
  // ],
  // agendaTextAs: "",
  // agendaIntro: "",
};
</script>
