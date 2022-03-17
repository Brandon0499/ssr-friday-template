<template class="bg-red">
  <div class="loader wf-section" style="display: none">
    <div class="loader-wrapper">
      <div class="progress-bar-wrapper">
        <div
          class="progress-bar"
          style="
            transform: translate3d(-100%, 0px, 0px) scale3d(1, 1, 1)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          "
        ></div>
      </div>
    </div>
  </div>
  <div class="full-page">
    <Navbar />
    <MainTitleSection></MainTitleSection>
    <AboutSection></AboutSection>
    <MarketingSection></MarketingSection>
    <CompanyEvents></CompanyEvents>
    <CompanyMembers></CompanyMembers>
    <CompanyAgendas></CompanyAgendas>
    <ParticipateSection></ParticipateSection>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.component.vue";
import MainTitleSection from "../../components/MainTitleSection/MainTitleSection.component.vue";
import AboutSection from "../../components/AboutSection/AboutSection.component.vue";
import MarketingSection from "../../components/MarketingSection/MarketingSection.component.vue";
import CompanyEvents from "../../components/CompanyEvents/CompanyEvents.component.vue";
import CompanyMembers from "../../components/CompanyMembers/CompanyMembers.component.vue";
import CompanyAgendas from "../../components/CompanyAgendas/CompanyAgendas.component.vue";
import ParticipateSection from "../../components/ParticipateSection/ParticipateSection.component.vue";
import Footer from "../../components/Footer/Footer.component.vue";

const pageProps = ["movie"];
export default {
  props: pageProps,

  data() {
    return {};
  },
  setup(props) {
    console.log(props);
  },

  components: {
    Navbar,
    MainTitleSection,
    AboutSection,
    MarketingSection,
    CompanyEvents,
    CompanyMembers,
    CompanyAgendas,
    ParticipateSection,
    Footer,
  },
};
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
