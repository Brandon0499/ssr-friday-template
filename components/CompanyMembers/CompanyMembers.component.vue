<template>
  <component
    :is="selectedComponent"
    :memberTextAs="payload.memberTextAs"
    :membersIntro="payload.membersIntro"
    :members="payload.members"
  />
</template>

<script>
import CompanyMembers from "./CompanyMembers.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { CompanyMembers },
  props: {
    selectedComponent: {
      type: String,
      default: "CompanyMembers",
    },
    payload: {
      type: Object,
      default: () => {
        return {
          memberTextAs: "Members",
          membersIntro: "Stay tuned for more annocemeents in the coming months",
          members: [
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
        };
      },
    },
  },
  setup() {},
});
</script>
