<template>
  <component
    :is="selectedComponent"
    :participateMethod="payload.participateMethod"
    :participateDetails="payload.participateDetails"
    :participateBtnText="payload.participateBtnText"
  ></component>
</template>

<script>
import ParticipateSection from "./ParticipateSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ParticipateSection },
  props: {
    selectedComponent: {
      type: String,
      default: "ParticipateSection",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          participateMethod: "get tickets",
          participateDetails:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
          participateBtnText: "Get Started",
        };
      },
    },
  },
  setup() {},
});
</script>
