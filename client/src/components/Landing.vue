<template>
  <div class="landing">
    <div class="content-wrapper">
      <site-info v-if="showSiteInfo" @createUser="checkIfUserExist" />
      <registration-form v-else :startGame="startGame" />
    </div>
  </div>
</template>

<script>
import RegistrationForm from "./RegistrationForm";
import SiteInfo from "./SiteInfo";
import { mapGetters } from "vuex";

export default {
  name: "landing",
  components: {
    RegistrationForm,
    SiteInfo,
  },
  props: {
    startGame: {
      type: Function,
    },
  },
  data() {
    return {
      showSiteInfo: true,
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  methods: {
    checkIfUserExist(hasUser) {
      if (!hasUser) {
        this.showSiteInfo = false;
        return;
      }
      if (this.startGame) this.startGame();
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  min-height: 100vh;
  position: relative;
  .content-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    max-width: 500px;
  }
}
</style>