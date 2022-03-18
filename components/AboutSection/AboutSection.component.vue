<template>
  <component
    :is="selectedComponent"
    :companyFullName="payload.companyFullName"
    :companySlogan="payload.companySlogan"
    :companySummary="payload.companySummary"
    :statistics="payload.statistics"
    :sponsors="payload.sponsors"
  />
</template>

<script>
import AboutSection from "./AboutSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { AboutSection },
  props: {
    selectedComponent: {
      type: String,
      default: "AboutSection",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          companyFullName: "Friday Festival",
          companySlogan: "Together Towards Tomorrow",
          companySummary:
            "Friday Festival is the community driven conference for design team leads, UX/UI designer, Creatives, and Art Directors looking to improve themselves and their teams.",

          statistics: [
            {
              statisticNumbers: "25+",
              statisticFor: "Innovators speakers",
            },
            {
              statisticNumbers: "32",
              statisticFor: "International sponsors",
            },
            {
              statisticNumbers: "18",
              statisticFor: "Creative Workshops",
            },
          ],
          sponsors: [
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7e67f00bd4e6_Combined Shape Copy 31.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7e86360bd4eb_LOGO-001-GRAY Copy.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7e474f0bd4ea_Combined Shape Copy 30.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7e3e010bd4e9_Combined Shape Copy 29.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7ea1400bd4e8_Combined Shape Copy 32.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7ebc9e0bd4e7_Combined Shape Copy 28.svg",
            },
            {
              sponsorImageURL:
                "/assets/61e5bb75ba3a7e76a20bd4e5_Combined Shape Copy 27.svg",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>

// export default defineComponent({ // components: { AboutSection }, // props: {
// selectedComponent: { // type: String, // default: "AboutSection", // }, //
payload: { // type: Object, // default: () => { // return {}; // }, // }, // },
// setup() {}, // });
