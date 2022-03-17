<template>
  <component :is="selectedComponent" v-bind="footerProps" />
</template>

<script setup>
import Footer from "./Footer.vue";

const selectedComponent = Footer;

const footerProps = {
  // companyLogo: "",
  // companyDescription: "",
  // footerLists: [
  //   {
  //     footerListName: "",
  //     footerSubLists: [
  //       {
  //         footerSubListName: "",
  //         sublistLink: "",
  //       },
  //     ],
  //   },
  // ],
  // socialMediaLinks: [
  //   {
  //     link: "",
  //     image: "",
  //   },
  // ],
  // companyName: "",
  // creatorCompany: "",
  // creatorCompanyWebsite: "",
  // creatorName: "",
  // creatorLink: "",
};
</script>
