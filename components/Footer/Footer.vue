<template>
  <footer class="section wf-section">
    <div class="container footer w-container">
      <div class="w-layout-grid main-grid footer">
        <div
          id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e46-07bf8e43"
          class="content-wrapper"
        >
          <img
            :src="props.companyLogo"
            loading="lazy"
            alt=""
            class="logo-footer"
          />
          <p class="main-paragraph">
            {{ props.companyDescription }}
          </p>
        </div>
        <ul
          role="list"
          class="w-list-unstyled"
          v-for="list in props.footerLists"
          :key="list"
        >
          <li>
            <h4 class="heading-small text-gray">
              {{ list.footerListName }}
            </h4>
          </li>

          <li v-for="sublist in list.footerSubLists" :key="sublist">
            <a :href="sublist.sublistLink" class="link-footer">{{
              sublist.footerSubListName
            }}</a>
          </li>
        </ul>

        <div
          id="w-node-_0bae9e82-9b29-b0df-f69c-0f24674e559d-07bf8e43"
          class="social-wrapper"
        >
          <a
            :href="socialMediaLink.link"
            class="link-icons center w-inline-block"
            v-for="socialMediaLink in props.socialMediaLinks"
            :key="socialMediaLink.image"
            ><img
              :src="socialMediaLink.image"
              loading="lazy"
              alt=""
              class="icon-social"
          /></a>
        </div>
        <div
          id="w-node-d6133a47-301a-a6de-46fb-2533b7c7a68a-07bf8e43"
          class="footer-inner"
        >
          <div class="main-paragraph size-small">
            © {{ props.companyName }} — Powered by
            <a :href="creatorCompanyWebsite" target="_blank">{{
              props.creatorCompany
            }}</a>
          </div>
        </div>
        <div
          id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e80-07bf8e43"
          class="footer-inner"
        >
          <div class="main-paragraph size-small">
            Created by
            <a :href="props.creatorLink" target="_blank">{{
              props.creatorName
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  companyLogo: {
    type: String,
    default: "/assets/61f314a5cce72f5bd933270d_Friday-black.svg",
  },
  companyDescription: {
    type: String,
    default:
      "Friday Festival is a modern Webflow Template for conference & event websites",
  },
  footerLists: {
    type: Array,
    default: [
      {
        footerListName: "Landings",
        footerSubLists: [
          {
            footerSubListName: "Landing 01",
            sublistLink: "https://friday-template.webflow.io/landing/01",
          },
          {
            footerSubListName: "Landing 02",
            sublistLink: "https://friday-template.webflow.io/landing/02",
          },
          {
            footerSubListName: "Landing 03",
            sublistLink: "https://friday-template.webflow.io/landing/03",
          },
          {
            footerSubListName: "Landing 04",
            sublistLink: "https://friday-template.webflow.io/landing/04",
          },
          {
            footerSubListName: "Landing 05",
            sublistLink: "https://friday-template.webflow.io/landing/05",
          },
        ],
      },
      {
        footerListName: "Features",
        footerSubLists: [
          {
            footerSubListName: "Features 01",
            sublistLink: "https://friday-template.webflow.io/features/01",
          },
          {
            footerSubListName: "Features 02",
            sublistLink: "https://friday-template.webflow.io/features/02",
          },
          {
            footerSubListName: "Features 03",
            sublistLink: "https://friday-template.webflow.io/features/03",
          },
          {
            footerSubListName: "Features 04",
            sublistLink: "https://friday-template.webflow.io/features/04",
          },
          {
            footerSubListName: "Features 05",
            sublistLink: "https://friday-template.webflow.io/features/05",
          },
        ],
      },
      {
        footerListName: "CMS",
        footerSubLists: [
          {
            footerSubListName: "CMS 01",
            sublistLink: "https://friday-template.webflow.io/cms/cms-01",
          },
          {
            footerSubListName: "CMS 02",
            sublistLink: "https://friday-template.webflow.io/cms/cms-02",
          },
          {
            footerSubListName: "CMS 03",
            sublistLink: "https://friday-template.webflow.io/cms/cms-03",
          },
          {
            footerSubListName: "CMS 04",
            sublistLink: "https://friday-template.webflow.io/cms/cms-04",
          },
          {
            footerSubListName: "CMS 05",
            sublistLink: "https://friday-template.webflow.io/cms/cms-05",
          },
        ],
      },
      {
        footerListName: "Form",
        footerSubLists: [
          {
            footerSubListName: "Form 01",
            sublistLink:
              "https://friday-template.webflow.io/other-pages/form-01",
          },
          {
            footerSubListName: "Form 02",
            sublistLink:
              "https://friday-template.webflow.io/other-pages/form-02",
          },
          {
            footerSubListName: "Form 03",
            sublistLink:
              "https://friday-template.webflow.io/other-pages/form-03",
          },
          {
            footerSubListName: "Form 04",
            sublistLink:
              "https://friday-template.webflow.io/other-pages/form-04",
          },
          {
            footerSubListName: "Form 05",
            sublistLink:
              "https://friday-template.webflow.io/other-pages/form-05",
          },
        ],
      },
      {
        footerListName: "Template",
        footerSubLists: [
          {
            footerSubListName: "Styleguide",
            sublistLink:
              "https://friday-template.webflow.io/utility/style-guide",
          },
          {
            footerSubListName: "License",
            sublistLink: "https://friday-template.webflow.io/utility/licenses",
          },
          {
            footerSubListName: "Changelog",
            sublistLink:
              "https://friday-template.webflow.io/utility/change-log",
          },
        ],
      },
    ],
  },
  socialMediaLinks: {
    type: Array,
    default: [
      {
        link: "https://friday-template.webflow.io/landing/01#",
        image: "/assets/61e5bb75ba3a7edc0f0bd4a4_icon-facebook.svg",
      },
      {
        link: "https://friday-template.webflow.io/landing/01#",
        image: "/assets/61e5bb75ba3a7e5ded0bd4a5_icon-instagram.svg",
      },
      {
        link: "https://friday-template.webflow.io/landing/01#",
        image: "/assets/61e5bb75ba3a7ee67e0bd4a2_icon-twitter.svg",
      },
      {
        link: "https://friday-template.webflow.io/landing/01#",
        image: "/assets/61e5bb75ba3a7e5fe50bd4a6_icon-linkedin.svg",
      },
      {
        link: "https://friday-template.webflow.io/landing/01#",
        image: "/assets/61e5bb75ba3a7ee2f50bd4a7_icon-youtube.svg",
      },
    ],
  },
  companyName: {
    type: String,
    default: "Friday",
  },
  creatorCompany: {
    type: String,
    default: "THC",
  },
  creatorCompanyWebsite: {
    type: String,
    default: "http://www.webflow.com/",
  },
  creatorName: {
    type: String,
    default: "JP",
  },
  creatorLink: {
    type: String,
    default: "https://webflow.com/templates/designers/jp",
  },
});
</script>

<style></style>
