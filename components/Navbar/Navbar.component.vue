<template>
  <component :is="selectedComponent" v-bind="navbarProps"></component>
</template>

<script setup>
import Navbar from "./Navbar.vue";
const selectedComponent = Navbar;

const navbarProps = {
  // companyLogoURL: "",
  // companyMainPageLink: "",
  // navTitles: [
  //   {
  //     navName: "",
  //     showDropdown: false,
  //     subTitleOpen: false,
  //     navSubTitles: [
  //       {
  //         navSubName: "",
  //         navSubPageLink: "",
  //       },
  //     ],
  //   },
  // ],
  // button1Text: "",
  // button1Link: "",
  // button2Text: "",
  // button2Link: "",
};
</script>
