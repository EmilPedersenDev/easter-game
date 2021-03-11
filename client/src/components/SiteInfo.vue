<template>
  <div class="site-info">
    <h1>Game info</h1>
    <p>
      Welcome to Stretch's easter game. Feel free to take part in this game and
      have the opportunity to win an easter egg! Create a user and compete for
      the highest score.
    </p>
    <game-button @click="createUser">{{ gameButtonText }}</game-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "site-info",
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
    gameButtonText() {
      return this.user ? "Start Game" : "Create User";
    },
  },
  methods: {
    createUser() {
      this.$emit("createUser", this.user ? true : false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>