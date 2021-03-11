<template>
  <form @submit.prevent="submit">
    <h1>Easter game</h1>
    <h3>Please enter name and email to play the game</h3>
    <game-input
      placeholder="Username"
      name="username"
      label="Username"
      aria-required=""
      v-model="model.username"
      required
      :invalid="$v.model.username.$error"
      :blur="$v.model.username.$touch"
    >
      <span
        class="input-error"
        slot="error"
        v-if="$v.model.username.$dirty && !$v.model.username.required"
        >Username required</span
      >
      <span
        class="input-error"
        slot="error"
        v-if="$v.model.username.$dirty && !$v.model.username.maxLength"
        >Username can not contain more than 20 characters</span
      ></game-input
    >
    <game-input
      placeholder="Email"
      name="email"
      label="Email"
      aria-required=""
      v-model="model.email"
      required
      :invalid="$v.model.email.$error"
      :blur="$v.model.email.$touch"
    >
      <span
        class="input-error"
        slot="error"
        v-if="$v.model.email.$dirty && !$v.model.email.required"
        >Email required</span
      >
      <span
        class="input-error"
        slot="error"
        v-if="$v.model.email.$dirty && !$v.model.email.email"
        >Not a valid email</span
      ></game-input
    >
    <game-button type="submit" :disabled="$v.$invalid">Start game</game-button>
  </form>
</template>

<script>
import { required, email, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "registration-form",
  props: {
    startGame: {
      type: Function,
    },
  },
  data() {
    return {
      model: {
        username: "",
        email: "",
      },
    };
  },
  validations: {
    model: {
      username: {
        required,
        maxLength: maxLength(20),
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    ...mapActions(["setUser"]),
    submit() {
      this.setUser(this.model)
        .then(() => {
          if (this.startGame) this.startGame();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  .game-button {
    margin-top: 20px;
  }
}

h1 {
  margin: 0;
}
</style>