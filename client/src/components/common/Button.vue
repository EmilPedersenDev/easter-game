<template>
  <button class="game-button" @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "game-button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(e) {
      if (this.type === "submit") return;
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.game-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: none;
  padding: 12px 10px;
  outline: none;
  font-weight: 600;
  color: $white;
  transition: all 0.3s ease;
  min-width: 100px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    z-index: -2;
  }
  &:before {
    content: "";
    bottom: 0;
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: $secondary;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    color: $white;
    &:before {
      width: 100%;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>