<template>
  <component
    :is="selectedComponent"
    :singleAgendas="payload.singleAgendas"
    :agendaTextAs="payload.agendaTextAs"
    :agendaIntro="payload.agendaIntro"
  />
</template>

<script>
import CompanyAgendas from "./CompanyAgendas.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CompanyAgendas },
  props: {
    selectedComponent: {
      type: String,
      default: "CompanyAgendas",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          singleAgendas: [
            {
              day: "Day 01",
              date: "July 30",
              agendaSchedules: ["9:00 AM", "9.30 AM"],
              agendaTitle:
                "Build an employer brand that attracts top performers",
              agendaSummary:
                "Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.Test1",
              showHiddenDetails: false,
              peopleInCharge: [
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
              ],
            },
            {
              day: "Day 02",
              date: "July 31",
              agendaSchedules: ["9:00 AM", "9.30 AM"],
              agendaTitle:
                "Build an employer brand that attracts top performers",
              agendaSummary:
                "Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.Test2",
              showHiddenDetails: false,
              peopleInCharge: [
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
                {
                  imageURL:
                    "/assets/61e5bb75ba3a7e25e50bd527_isolated-shot-joyful-blonde-young.jpg",
                  name: "Jessica Walsh",
                  position: "Chief Officer",
                },
              ],
            },
          ],
          agendaTextAs: "Agenda",
          agendaIntro:
            "A stellar roster of design and product leaders to share their journeys and experiences with the community.",
        };
      },
    },
  },
  setup() {},
});

// const agendaProps = {
//   // singleAgendas: [
//   //   {
//   //     day: "1",
//   //     date: "25",
//   //     agendaSchedules: [],
//   //   },
//   // ],
//   // agendaTitle: "",
//   // agendaSummary: "",
//   // showHiddenDetails: false,
//   // peopleInCharge: [
//   //   {
//   //     imageURL: "",
//   //     name: "",
//   //     position: "",
//   //   },
//   // ],
//   // agendaTextAs: "",
//   // agendaIntro: "",
// };
</script>
