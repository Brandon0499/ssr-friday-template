<template>
  <div class="section bg-dark-gray wf-section">
    <div class="eventWrapper">
      <div class="eventCardsContainer">
        <div
          class="individualCardContainer"
          v-for="event in events"
          :key="event.eventName"
        >
          <a :href="event.eventPageLink">
            <div class="imgContainer">
              <img :src="event.eventImageLink" alt="" class="eventImage" />
            </div>
            <div class="textContainer">
              <h2 class="heading-large margin-bottom-xsmall">
                {{ event.eventName }}
              </h2>
              <p class="main-paragraph text-white-opacity-strong">
                {{ event.eventSummary }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <WavesSeparator></WavesSeparator>
    -
  </div>
</template>

<script>
import WavesSeparator from "../WavesSeparator.vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    events: {
      type: Array,
      default: [
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
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.imgContainer {
  height: auto;
  border-radius: 35px;
  overflow: hidden;
}

.eventImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.eventWrapper {
  padding: 150px 40px 0px;
  height: auto;
}

.eventCardsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.individualCardContainer {
  padding: 30px;
  flex-basis: 45%;
}

.individualCardContainer a {
  text-decoration: none;
}

.textContainer {
  text-align: center;
  padding: 50px 40px 60px;
  overflow: visible;
}

@media screen and (max-width: 991px) {
  .individualCardContainer {
    width: 100%;
  }

  .eventCardsContainer {
    display: inline-block;
    justify-content: center;
  }
}
</style>
