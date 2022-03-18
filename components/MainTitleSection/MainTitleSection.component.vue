<template>
  <component
    :is="selectedComponent"
    :companyActivityTitle="payload.companyActivityTitle"
    :emojiURL="payload.emojiURL"
    :joinButtonText="payload.joinButtonText"
    :learnMoreText="payload.learnMoreText"
    :bannerWords="payload.bannerWords"
  ></component>
</template>

<script>
import MainTitleSection from "./MainTitleSection.vue";
import { defineComponent } from "vue";

const selectedComponent = MainTitleSection;

export default defineComponent({
  components: { MainTitleSection },
  props: {
    selectedComponent: {
      type: String,
      default: "MainTitleSection",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          companyActivityTitle: "Apple Festival",
          emojiURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png",
          joinButtonText: "Join Here",
          learnMoreText: "Click here to learn more",
          bannerWords: [
            "the design event of the year",
            "#FFW 2022",
            "grab a spot",
          ],
        };
      },
    },
  },
  setup() {},
});
</script>
