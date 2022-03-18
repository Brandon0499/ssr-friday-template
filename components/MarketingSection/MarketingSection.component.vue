<template>
  <component
    :is="selectedComponent"
    :whyUsText="payload.whyUsText"
    :reasons="payload.reasons"
  ></component>
</template>

<script>
import MarketingSection from "./MarketingSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MarketingSection },
  props: {
    selectedComponent: {
      type: String,
      default: "MarketingSection",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          whyUsText: "Why Attend Friday festival?",
          reasons: [
            {
              reasonTitle: "Raise your skillset to the next level.",
              reasonParagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.1",
            },
            {
              reasonTitle: "Extend your industry connections.",
              reasonParagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.2",
            },
            {
              reasonTitle: "Interact live with world-class experts.",
              reasonParagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.3",
            },
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
