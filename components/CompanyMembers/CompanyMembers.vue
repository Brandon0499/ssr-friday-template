<template>
  <div class="section bg-dark-gray wf-section">
    <div class="container padding-bottom-medium blackBg">
      <div class="container">
        <div class="w-layout-grid main-grid">
          <div
            id="w-node-_6e7598f0-4ae8-b765-38bc-ef4f35557c1a-0e305478"
            class="center-wrapper inner-padding-medium"
          >
            <h2 class="heading-large margin-bottom-xsmall">
              {{ props.memberTextAs }}
            </h2>
            <p class="medium-paragraph">
              {{ props.membersIntro }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-dyn-list">
        <div role="list" class="collection-list-col w-dyn-items">
          <div
            id="w-node-_6e7598f0-4ae8-b765-38bc-ef4f35557c20-0e305478"
            role="listitem"
            class="collection-item w-dyn-item"
            v-for="member in props.members"
            :key="member.memberName"
          >
            <a
              data-w-id="6e7598f0-4ae8-b765-38bc-ef4f35557c21"
              :href="member.memberProfileLink"
              class="link-block w-inline-block relativeDiv"
            >
              <img
                :src="member.memberImageURL"
                loading="lazy"
                alt=""
                class="cover-image relative"
              />
              <div class="tint">
                <div class="memberNameContainer">
                  <h1 class="memberNameText heading-large">
                    {{ member.memberName }}
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <WavesSeparator></WavesSeparator>
  </div>
</template>

<script setup>
import WavesSeparator from "../WavesSeparator.vue";
const props = defineProps({
  memberTextAs: {
    type: String,
    default: "Members",
  },
  membersIntro: {
    type: String,
    default: "Stay tuned for more annocemeents in the coming months",
  },
  members: {
    type: Array,
    default: [
      {
        memberName: "James Hetfield",
        memberProfileLink:
          "https://friday-template.webflow.io/speakers/james-hetfield",
        memberImageURL:
          "/assets/61fdc09d23a662eecb14d82a_portrait-happy-smiley-man.jpg",
      },
      {
        memberName: "Ada Lovelace",
        memberProfileLink:
          "https://friday-template.webflow.io/speakers/ada-lovelace",
        memberImageURL:
          "https://assets.website-files.com/61e5bb75ba3a7e1b1d0bd3e5/61fdc0a871a096ee4ef00abd_portrait-good-.jpg",
      },
      {
        memberName: "Tiffany Tattum",
        memberProfileLink:
          "https://friday-template.webflow.io/speakers/tiffany-tattum",
        memberImageURL:
          "https://assets.website-files.com/61e5bb75ba3a7e1b1d0bd3e5/61fdc767a1b84ad984911b54_pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg",
      },
    ],
  },
});
</script>

<style>
.memberNameText {
  position: absolute;
  bottom: 0;
  transition: 0.3s;
  text-align: center;
}

.memberNameContainer {
  outline: 1px solid white;
  height: 100%;
  display: flex;
  justify-content: center;
}

.relativeDiv {
  position: relative;
}

.tint {
  position: absolute;
  z-index: 1;
  background: #4d8cf5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 0.3s;
}

.tint:hover {
  opacity: 0.8;
}

.tint:hover .memberNameText {
  bottom: 35%;
}

.blackBg {
  background-color: #272727;
}

@media screen and (max-width: 991px) {
  .tint:hover .memberNameText {
    bottom: 42%;
  }
}
</style>
