<template>
  <div class="nav-wrapper">
    <nav class="wrappernav">
      <div
        data-animation="default"
        class="navbar white-version w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="0"
        data-doc-height="1"
      >
        <div class="w-layout-grid navgrid">
          <a
            :href="props.companyMainPageLink"
            id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a388-ba39a384"
            class="brand w-nav-brand logoZ smallHidden"
            aria-label="home"
            ><img
              :src="props.companyLogoURL"
              loading="lazy"
              alt=""
              class="image-brand"
          /></a>
          <nav
            role="navigation"
            id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a38a-ba39a384"
            class="nav-menu w-nav-menu"
          >
            <div class="inner-nav-wrapper">
              <div class="main-navbar">
                <div class="nav-item-wrapper">
                  <a
                    :href="props.companyMainPageLink"
                    class="nav-link w-nav-link"
                    >Home</a
                  >
                  <div
                    data-w-id="703e939d-fb81-d5e3-3360-68b6ba39a390"
                    data-animation-type="lottie"
                    data-src="https://assets.website-files.com/61e5bb75ba3a7e40020bd3b2/61f0ae2c972551a5ec15a479_line_white.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="0"
                    data-is-ix2-target="1"
                    data-renderer="svg"
                    data-default-duration="2.0416666666666665"
                    data-duration="0"
                    data-ix2-initial-state="0"
                    class="lottie-animation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 200"
                      width="500"
                      height="200"
                      preserveAspectRatio="xMidYMid meet"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate3d(0px, 0px, 0px);
                      "
                    >
                      <defs>
                        <clippath id="__lottie_element_7">
                          <rect width="500" height="200" x="0" y="0"></rect>
                        </clippath>
                      </defs>
                      <g clip-path="url(#__lottie_element_7)">
                        <g
                          transform="matrix(0.9520000219345093,0,0,0.8999999761581421,250,100)"
                          opacity="1"
                          style="display: block"
                        >
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(255,255,255)"
                              stroke-opacity="1"
                              stroke-width="15"
                              d="M0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="nav-item-wrapper">
                  <div
                    data-w-id="703e939d-fb81-d5e3-3360-68b6ba39a392"
                    data-animation-type="lottie"
                    data-src="https://assets.website-files.com/61e5bb75ba3a7e40020bd3b2/61f0ae2c972551a5ec15a479_line_white.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="0"
                    data-is-ix2-target="1"
                    data-renderer="svg"
                    data-default-duration="2.0416666666666665"
                    data-duration="0"
                    data-ix2-initial-state="0"
                    class="lottie-animation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 200"
                      width="500"
                      height="200"
                      preserveAspectRatio="xMidYMid meet"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate3d(0px, 0px, 0px);
                      "
                    >
                      <defs>
                        <clippath id="__lottie_element_24">
                          <rect width="500" height="200" x="0" y="0"></rect>
                        </clippath>
                      </defs>
                      <g clip-path="url(#__lottie_element_24)">
                        <g
                          transform="matrix(0.9520000219345093,0,0,0.8999999761581421,250,100)"
                          opacity="1"
                          style="display: block"
                        >
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(255,255,255)"
                              stroke-opacity="1"
                              stroke-width="15"
                              d="M0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  class="nav-item-wrapper"
                  v-for="navTitle in props.navTitles"
                  :key="navTitle.navName"
                >
                  <div
                    data-w-id="703e939d-fb81-d5e3-3360-68b6ba39a394"
                    data-animation-type="lottie"
                    data-src="https://assets.website-files.com/61e5bb75ba3a7e40020bd3b2/61f0ae2c972551a5ec15a479_line_white.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="0"
                    data-is-ix2-target="1"
                    data-renderer="svg"
                    data-default-duration="2.0416666666666665"
                    data-duration="0"
                    data-ix2-initial-state="0"
                    class="lottie-animation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 200"
                      width="500"
                      height="200"
                      preserveAspectRatio="xMidYMid meet"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate3d(0px, 0px, 0px);
                      "
                    >
                      <defs>
                        <clippath id="__lottie_element_28">
                          <rect width="500" height="200" x="0" y="0"></rect>
                        </clippath>
                      </defs>
                      <g clip-path="url(#__lottie_element_28)">
                        <g
                          transform="matrix(0.9520000219345093,0,0,0.8999999761581421,250,100)"
                          opacity="1"
                          style="display: block"
                        >
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(255,255,255)"
                              stroke-opacity="1"
                              stroke-width="15"
                              d="M0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    data-hover="true"
                    data-delay="0"
                    class="dropdown w-dropdown"
                    @click="$emit('toggleDropdown', navTitle)"
                    @mouseover="navTitle.showDropdown = true"
                    @mouseleave="navTitle.showDropdown = false"
                  >
                    <!-- @click="$emit('toggleDropdown', navTitle)" -->
                    <!-- @click="toggleDropdown(navTitle)" -->
                    <div
                      class="dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-0"
                      aria-controls="w-dropdown-list-0"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabindex="0"
                    >
                      <div
                        class="icon text-white w-icon-dropdown-toggle"
                        aria-hidden="true"
                      ></div>
                      <div>{{ navTitle.navName }}</div>
                    </div>
                    <!-- toggle -->
                    <nav
                      class="dropdown-list w-dropdown-list"
                      id="w-dropdown-list-0"
                      aria-labelledby="w-dropdown-toggle-0"
                      :class="{ dropdownList: navTitle.showDropdown }"
                    >
                      <div>
                        <a
                          :href="navbarSubTitle.navSubPageLink"
                          aria-current="page"
                          class="dropdown-link w-dropdown-link w--current"
                          tabindex="0"
                          v-for="navbarSubTitle in navTitle.navSubTitles"
                          :key="navbarSubTitle.navSubName"
                          >{{ navbarSubTitle.navSubName }}</a
                        >
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="w-layout-grid grid-buttons nav">
                <a
                  id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a3da-ba39a384"
                  :href="props.button1Link"
                  class="topnav-button outline w-inline-block"
                  ><div>{{ props.button1Text }}</div></a
                >
                <div
                  id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a3dd-ba39a384"
                  class="main-button-wrapper"
                >
                  <a
                    id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a3de-ba39a384"
                    :href="props.button2Link"
                    target="_blank"
                    class="button small w-inline-block"
                    style=""
                    ><div class="circular-arrow" style="">
                      <img
                        src="/assets/61e5bb75ba3a7ec9880bd403_cta-arrow-white.svg"
                        loading="lazy"
                        alt=""
                        class="icon-arrow"
                      />
                    </div>
                    <div>{{ props.button2Text }}</div></a
                  >
                  <div class="m-button-shadow" style="display: block"></div>
                </div>
              </div>
            </div>
          </nav>

          <!-- hide this div if user did not click the menu button -->
          <div class="mobileMenuOverlay" :class="{ blackBg: menuOpen }">
            <div class="mobileMenuWrapper">
              <a
                :href="props.companyMainPageLink"
                id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a388-ba39a384"
                class="brand w-nav-brand"
                aria-label="home"
                ><img
                  :src="props.companyLogoURL"
                  loading="lazy"
                  alt=""
                  class="image-brand"
              /></a>
              <div
                class="menuBtn"
                @click="toggleMenu"
                :class="{ open: menuOpen }"
                style="z-index: 8"
              >
                <div class="menuBtnLines"></div>
              </div>
            </div>
            <!-- only show the dropdowns when the mobile menu is clicked -->
            <div class="mobileNavWrapper" :class="{ showNone: !menuOpen }">
              <div class="homeNav">
                <a :href="props.companyMainPageLink" class="homeLink"> Home </a>
              </div>

              <div
                class="individualNav"
                v-for="navTitle in props.navTitles"
                :key="navTitle.navName"
                @click="toggleSubTitle(navTitle)"
                @mouseover="navTitle.subTitleOpen = true"
                @mouseleave="navTitle.subTitleOpen = false"
              >
                <div
                  href="https://friday-template.webflow.io/"
                  class="navLinks"
                >
                  {{ navTitle.navName }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 chevronDown"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  class="subNavWrapper"
                  :class="{ showSubTitle: navTitle.subTitleOpen }"
                >
                  <a
                    :href="navbarSubTitle.navSubPageLink"
                    v-for="navbarSubTitle in navTitle.navSubTitles"
                    :key="navbarSubTitle.navSubName"
                    >{{ navbarSubTitle.navSubName }}</a
                  >
                </div>
              </div>
            </div>

            <!-- mobile buttons section -->
            <!-- bind the mobileButtonOverlay class only if the menuOpen is true-->
            <div class="mobileBtn">
              <a
                id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a3da-ba39a384"
                :href="props.button1Link"
                class="topnav-button outline w-inline-block button1"
                :class="{ mobileButtonOverlay: !menuOpen }"
                ><div>{{ props.button1Text }}</div></a
              >
              <a
                id="w-node-_703e939d-fb81-d5e3-3360-68b6ba39a3de-ba39a384"
                :href="props.button2Link"
                target="_blank"
                class="button small w-inline-block button2"
                :class="{ mobileButtonOverlay: !menuOpen }"
                ><div class="circular-arrow" style="">
                  <img
                    src="/assets/61e5bb75ba3a7ec9880bd403_cta-arrow-white.svg"
                    loading="lazy"
                    alt=""
                    class="icon-arrow"
                  />
                </div>
                <div>{{ props.button2Text }}</div></a
              >
            </div>
          </div>
        </div>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    </nav>
    <div class="overlayer-nav"></div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  companyLogoURL: {
    type: String,
    default: "/assets/61f31498ab68631620f198f9_Friday-white.svg",
  },
  companyMainPageLink: {
    type: String,
    default: "https://friday-template.webflow.io/",
  },
  navTitles: {
    type: Array,
    default: [
      {
        navName: "Landings",
        showDropdown: false,
        subTitleOpen: false,
        navSubTitles: [
          {
            navSubName: "Landing 01",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Landing 02",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Landing 03",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Landing 04",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Landing 05",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
        ],
      },
      {
        navName: "Features",
        showDropdown: false,
        subTitleOpen: false,
        navSubTitles: [
          {
            navSubName: "Features 01",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Features 02",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Features 03",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Features 04",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
        ],
      },
      {
        navName: "CMS",
        showDropdown: false,
        subTitleOpen: false,
        navSubTitles: [
          {
            navSubName: "CMS 01",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "CMS 02",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "CMS 03",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
        ],
      },
      {
        navName: "Template",
        showDropdown: false,
        subTitleOpen: false,
        navSubTitles: [
          {
            navSubName: "Template 01",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Template 02",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Template 03",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
          {
            navSubName: "Template 04",
            navSubPageLink: "https://friday-template.webflow.io/",
          },
        ],
      },
    ],
  },

  button1Text: {
    type: String,
    default: "Sign Up",
  },

  button1Link: {
    type: String,
    default: "https://friday-template.webflow.io/other-pages/form-03",
  },

  button2Text: {
    type: String,
    default: "Sign In",
  },

  button2Link: {
    type: String,
    default:
      "https://webflow.com/templates/html/friday-conference-website-template",
  },
});

let menuOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

// function toggleDropdown(navTitle) {
//   navTitle.showDropdown = !navTitle.showDropdown;
//   console.log(navTitle.showDropdown);
// }

// function toggleSubTitle(navTitle) {
//   navTitle.subTitleOpen = !navTitle.subTitleOpen;
//   console.log(navTitle, navTitle.subTitleOpen);
// }
</script>

<style scoped>
.button {
  transition: all 0.3s ease-in-out;
}
.button:hover {
  transform: translate(10px, -10px);
}

.subNavWrapper {
  display: none;
  flex-direction: column;
  padding: 0 2px;
  border-radius: 12px;
  background-color: #fafafc;
  margin-top: 10px;
}

.showSubTitle {
  display: flex;
}

.subNavWrapper a {
  text-decoration: none;
  color: #595959;
  background: #fff;
  padding: 10px 20px;
  background-color: #fafafc;
  border-radius: 12px;
}

.subNavWrapper a:hover {
  text-decoration: none;
  color: #596594;
  background-color: rgb(238, 236, 236);
}

.chevronDown {
  display: block;
  width: 20px;
  color: darkgrey;
}

.showNone {
  display: none;
}

.mobileNavWrapper {
  margin-top: 40px;
}

.homeNav {
  width: 100%;
  padding: 10px 20px;
}
.individualNav {
  width: 100%;
  padding: 10px 20px;
}

.homeLink {
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  width: 100%;
}
.homeLink:hover {
  color: rgb(193, 190, 190);
}

.navLinks {
  display: flex;
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.navLinks:hover {
  color: rgb(193, 190, 190);
}

.mobileMenuWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.blackBg {
  background-color: black;
}

.dropdownList {
  display: block;
}

.logoZ {
  z-index: 2;
}

.mobileMenuOverlay {
  display: flex;
  flex-direction: column;
  visibility: hidden;
  z-index: 5;
  opacity: 100%;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 20px 30px;
  min-height: 100px;
}

.mobileButtonOverlay {
  visibility: hidden;
}

.menuBtn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  border-radius: 50%;
}

.menuBtnLines {
  width: 40px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: transform 0.5s ease-in-out;
}

.menuBtnLines::before,
.menuBtnLines::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: transform 0.5s ease-in-out;
}

.menuBtnLines::before {
  transform: translateY(-5px) translateX(5px);
}

.menuBtnLines::after {
  width: 25px;
  transform: translateY(5px) translateX(10px);
}

.open {
  border-radius: 50%;
  background-color: #4e43ca;
}

.open .menuBtnLines::before {
  transform: rotate(45deg) translateY(-5px) translateX(3px);
  width: 30px;
}

.open .menuBtnLines::after {
  transform: rotate(135deg) translateY(-3px) translateX(-5px);
  width: 30px;
}

@media screen and (max-width: 991px) {
  .mobileBtn {
    padding: 40px 20px;
    display: flex;
    align-items: center;
  }

  .button1 {
    width: auto;
    height: 56px;
    margin: 10px;
  }
  .button2 {
    width: 190px;
    height: 68px;
    margin: 10px;
  }

  .mobileMenuOverlay {
    visibility: visible;
    /* opacity: 100%; */
  }

  .smallHidden {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .mobileBtn {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button1 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .button2 {
    width: 100%;
  }
}
</style>
