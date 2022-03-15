<template>
  <div class="section titles bg-red wf-section">
    <div class="container header w-container">
      <div class="w-layout-grid main-grid no-gap">
        <div
          id="w-node-f16383f7-a435-9fbd-d177-bd0fbd8c4c1c-0e305478"
          class="content-wrapper inner-padding-small"
        >
          <img
            :src="props.emojiURL"
            loading="lazy"
            width="206"
            alt=""
            class="image-smile"
          />
        </div>
        <div
          id="w-node-_457eb3c8-9b36-effc-ee78-fda56a38a58f-0e305478"
          class="overflow"
        >
          <div class="xlarge">{{ props.companyActivityTitle }}</div>
        </div>
        <div
          id="w-node-d0a5ca32-c852-da7c-b576-7f40495022cb-0e305478"
          class="content-wrapper flex-horizontal"
        >
          <marquee
            width="100%"
            direction="left"
            scrollamount="15"
            class="textMarquee"
          >
            <p
              class="heading-regular uppercase"
              v-for="bannerWord in props.bannerWords"
              :key="bannerWord"
            >
              &bull;{{ bannerWord }}
            </p>
          </marquee>
          <!-- marquee end -->
          <!-- <div class="xlarge">{{ props.eventActivity }}</div> -->
        </div>
      </div>
      <div class="wrapper-heading inner-padding-small zFront">
        <div class="w-layout-grid grid-buttons .zFront">
          <div id="w-node-acbeed1e-14e6-2f5d-f965-c0dfd171fa89-0e305478">
            <div
              data-w-id="f22dbb03-ea9e-a94b-045a-7963939b43b2"
              class="main-button-wrap"
            >
              <a
                id="w-node-f22dbb03-ea9e-a94b-045a-7963939b43b3-939b43b2"
                href="https://webflow.com/templates/html/friday-conference-website-template"
                target="_blank"
                class="button w-inline-block"
                style="
                  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
                ><div class="m-button-label">
                  <div
                    class="circular-arrow"
                    style="background-color: rgb(241, 173, 46)"
                  >
                    <img
                      src="/assets/61e5bb75ba3a7ec9880bd403_cta-arrow-white.svg"
                      loading="lazy"
                      alt=""
                      class="icon-arrow"
                    />
                  </div>
                  <div class="label-button">
                    {{ props.joinButtonText }}
                  </div>
                </div>
                <div
                  class="m-button-hover"
                  style="
                    transform: translate3d(-102%, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                ></div
              ></a>
              <div class="m-button-shadow" style="display: none"></div>
            </div>
          </div>
          <div
            id="w-node-_786cc278-92ec-6bcd-270f-eeb81f660a90-0e305478"
            href="https://friday-template.webflow.io/landing/01#"
            class="button inline w-inline-block"
          >
            <div>{{ props.learnMoreText }}</div>
            <div
              class="outline-hover"
              style="
                transform: translate3d(-102%, 0px, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  companyActivityTitle: {
    type: String,
    default: "Apple Festival",
  },
  // eventActivity: {
  //   type: String,
  //   default: "Festival",
  // },
  emojiURL: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png",
  },
  joinButtonText: {
    type: String,
    default: "Join Here",
  },
  learnMoreText: {
    type: String,
    default: "Click here to learn more",
  },
  bannerWords: {
    type: Array,
    default: ["the design event of the year", "#FFW 2022", "grab a spot"],
  },
});
</script>

<style scoped>
.zFront {
  z-index: 20;
}

.main-button-wrap:hover {
  transition: all 0.3s ease-in-out;
}

.main-button-wrap:hover {
  transform: translate(10px, -10px);
}

.textMarquee p {
  display: inline-block;
  margin-top: 10px;
  margin-left: 30px;
}

.main-button-wrap .button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(236, 236, 83);
  z-index: -1;
  border-radius: 30px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-300px);
  transform-origin: left;
}

.main-button-wrap .button:hover::before,
.main-button-wrap .button:focus::before {
  transform: translateX(0px);
  color: black;
}

.main-button-wrap.label-button {
  color: white;
  transition: color 2s ease-in-out;
}

.main-button-wrap:hover .label-button {
  color: black;
}
</style>
