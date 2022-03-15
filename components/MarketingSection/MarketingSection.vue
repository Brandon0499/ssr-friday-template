<template>
  <div data-w-id="9088d6c6-88de-9ea2-c7ed-b2bfa4356ca2" class="track">
    <div class="section-wide bg-color wf-section">
      <div class="container w-container">
        <div class="w-layout-grid main-grid">
          <h1
            id="w-node-_9088d6c6-88de-9ea2-c7ed-b2bfa4356ca6-0e305478"
            class="heading-xlarge-hero"
            style=""
          >
            {{ props.whyUsText }}
          </h1>
        </div>
      </div>
      <div
        class="circle-section bg-yellow"
        style="will-change: width, height; width: 0.1vw; height: 0.1vw"
      >
        <div
          class="inner-circle bg-dark-gray"
          style="
            will-change: transform;
            transform: translate3d(0px, 0px, 0px) scale3d(0.3, 0.3, 1)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          "
        ></div>
      </div>
    </div>
    <div class="inner-section-content">
      <div class="container w-container">
        <div class="w-layout-grid main-grid">
          <div id="w-node-_28280f35-779c-5cf2-008c-0516b6395e27-0e305478">
            <div
              class="content-wrapper padding-bottom-medium"
              v-for="reason in props.reasons"
              :key="reason.reasonTitle"
            >
              <div
                id="w-node-_9088d6c6-88de-9ea2-c7ed-b2bfa4356cac-0e305478"
                class="heading-medium text-white margin-bottom-xsmall"
              >
                {{ reason.reasonTitle }}
              </div>
              <p class="medium-paragraph">
                {{ reason.reasonParagraph }}
              </p>
              <!-- waves separator -->
              <div class="flex">
                <div
                  data-w-id="01c3f3e3-59c1-c584-d75d-f23ff8a34bec"
                  data-animation-type="lottie"
                  data-src="https://assets.website-files.com/61e5bb75ba3a7e40020bd3b2/620a95bf9ede664b27335e16_shape1_pink.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="svg"
                  data-default-duration="3"
                  data-duration="0"
                  class="lottie-animation-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 139 34"
                    width="139"
                    height="34"
                    preserveAspectRatio="xMidYMid meet"
                    style="
                      width: 100%;
                      height: 100%;
                      transform: translate3d(0px, 0px, 0px);
                    "
                  >
                    <defs>
                      <clippath id="__lottie_element_66">
                        <rect width="139" height="34" x="0" y="0"></rect>
                      </clippath>
                    </defs>
                    <g clip-path="url(#__lottie_element_66)">
                      <g
                        transform="matrix(1,0,0,1,38.61900329589844,-32.295997619628906)"
                        opacity="1"
                        style="display: block"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                            stroke-dasharray=" 102 25"
                            stroke-dashoffset="30.233993530273438"
                            stroke="rgb(244,132,125)"
                            stroke-opacity="1"
                            stroke-width="8"
                            d=" M93.38200378417969,41.233001708984375 C77.86599731445312,41.233001708984375 77.86599731445312,55.14699935913086 62.349998474121094,55.14699935913086 C46.83399963378906,55.14699935913086 46.834999084472656,41.233001708984375 31.319000244140625,41.233001708984375 C15.803000450134277,41.233001708984375 15.803999900817871,55.14699935913086 0.2879999876022339,55.14699935913086 C-15.227999687194824,55.14699935913086 -15.22700023651123,41.233001708984375 -30.743000030517578,41.233001708984375"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  whyUsText: {
    type: String,
    default: "Why Attend Friday festival?",
  },
  reasons: {
    type: Array,
    default: [
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
  },
});
</script>

<style scoped>
.inner-section-content {
  background-color: #7b39b8;
}

@media screen and (max-width: 991px) {
  .section-wide {
    height: auto;
    padding: 100px 0px;
    position: relative;
  }

  .track {
    min-height: 0vh;
  }
}
</style>
