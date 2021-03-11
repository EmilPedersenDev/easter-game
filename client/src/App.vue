<template>
  <div id="app">
    <div class="app-overlay-bg-1"></div>
    <div class="app-overlay-bg-2"></div>
    <img src="assets/stretchLogo3.png" alt="" />
    <landing v-if="!isGameStarted" :startGame="startGame"></landing>
    <div class="game-container" v-if="isGameStarted && user">
      <game-scene />
    </div>
  </div>
</template>

<script>
import GameScene from "./components/game/GameScene";
import Landing from "./components/Landing";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    GameScene,
    Landing,
  },
  data() {
    return {
      isGameStarted: false,
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  methods: {
    ...mapActions(["getUsers"]),
    startGame() {
      this.isGameStarted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
  position: relative;

  .app-overlay-bg-1 {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffd4e5),
      to(#bde8ef)
    );
  }
  .app-overlay-bg-2 {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: linear-gradient(transparent, #fff);
  }

  .game-container {
    position: relative;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
  }
}
</style>
