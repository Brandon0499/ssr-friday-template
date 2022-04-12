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
    <component
      :selected-component="component.selectedComponent"
      v-for="component in pageData"
      :is="component.componentName"
      :payload="component.payload"
    ></component>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import Navbar from "../../components/Navbar/Navbar.component.vue";
import MainTitleSection from "../../components/MainTitleSection/MainTitleSection.component.vue";
import AboutSection from "../../components/AboutSection/AboutSection.component.vue";
import MarketingSection from "../../components/MarketingSection/MarketingSection.component.vue";
import CompanyEvents from "../../components/CompanyEvents/CompanyEvents.component.vue";
import CompanyMembers from "../../components/CompanyMembers/CompanyMembers.component.vue";
import CompanyAgendas from "../../components/CompanyAgendas/CompanyAgendas.component.vue";
import ParticipateSection from "../../components/ParticipateSection/ParticipateSection.component.vue";
import Footer from "../../components/Footer/Footer.component.vue";
import { fridayTemplateCreator } from "../../helpers/fridayTemplateCreator";

const pageProps = ["data"];
export default defineComponent({
  props: pageProps,
  components: {
    Navbar,
    Footer,
    AboutSection,
    CompanyAgendas,
    CompanyEvents,
    CompanyMembers,
    MainTitleSection,
    MarketingSection,
    ParticipateSection,
  },
  setup(props) {
    const pageData = ref([]);

    onBeforeMount(async () => {
      const componentStructureList = fridayTemplateCreator(props.data);
      pageData.value = [...componentStructureList];
    });

    return { pageData };
  },
});
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
