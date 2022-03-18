<template>
  <component
    :is="selectedComponent"
    :companyLogoURL="payload.companyLogoURL"
    :companyMainPageLink="payload.companyMainPageLink"
    :navTitles="payload.navTitles"
    :button1Text="payload.button1Text"
    :button1Link="payload.button1Link"
    :button2Text="payload.button2Text"
    :button2Link="payload.button2Link"
  ></component>
</template>

<script>
import Navbar from "./Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Navbar },
  props: {
    selectedComponent: {
      type: String,
      default: "Navbar",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          companyLogoURL: "/assets/61f31498ab68631620f198f9_Friday-white.svg",
          companyMainPageLink: "https://friday-template.webflow.io/",
          navTitles: [
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

          button1Text: "Sign Up",
          button1Link: "https://friday-template.webflow.io/other-pages/form-03",
          button2Text: "Sign In",
          button2Link:
            "https://webflow.com/templates/html/friday-conference-website-template",
        };
      },
    },
  },
  setup() {},
});
</script>
