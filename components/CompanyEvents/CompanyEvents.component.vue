<template>
  <component :is="selectedComponent" :events="payload.events" />
</template>

<script>
import CompanyEvents from "./CompanyEvents.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CompanyEvents },
  props: {
    selectedComponent: {
      type: String,
      default: "CompanyEvents",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          events: [
            {
              eventPageLink: "https://friday-template.webflow.io/landing/01#",
              eventName: "exhibitions",
              eventImageLink:
                "https://www.museumnext.com/wp-content/uploads/2017/06/Designing-an-Exhibition-1.jpg",
              eventSummary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            },
            {
              eventPageLink: "https://friday-template.webflow.io/landing/01#",
              eventName: "workshops",
              eventImageLink:
                "https://media.sonar.es/attached_images/20888/medium/Workshop2.jpg?1518077129",
              eventSummary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            },
          ],
        };
      },
    },
  },
  setup() {},
});

// const eventProps = {
//   // events: [
//   //   {
//   //     eventPageLink: "",
//   //     eventName: "",
//   //     eventImageLink: "",
//   //     eventSummary: "",
//   //   },
//   // ],
// };
</script>
