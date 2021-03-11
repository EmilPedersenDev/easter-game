<template>
  <div :class="classlist">
    <input
      :type="type"
      :name="name"
      class="input-field"
      :placeholder="label || placeholder"
      @input="onInput($event.target.value)"
      @blur="onBlur"
      :autocomplete="autocomplete"
      :value="value"
      :id="id"
    />
    <i class="fas fa-exclamation" v-if="invalid"></i>
    <i class="fas fa-check" v-if="required && !invalid && value !== ''"></i>
    <label :for="id" class="input-label"> {{ label }} </label>

    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "game-input",
  props: {
    value: {
      default: null,
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "text...",
    },
    blur: {
      type: Function,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    classlist() {
      return [
        "game-input",
        this.invalid && "invalid",
        this.required && "required",
      ];
    },
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    onBlur() {
      if (this.blur) this.blur();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.game-input {
  position: relative;
  padding: 15px 0 0;
  margin-top: 20px;
  width: 100%;
  input {
    position: relative;
    width: inherit;
    background: transparent;
    text-decoration: none;
    border: 1px solid rgba($color: #000, $alpha: 1);
    font-size: 14px;
    font-weight: normal;
    padding: 10px 25px 10px 18px;
    color: #000;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    &::placeholder {
      color: #000;
      font-weight: normal;
    }
  }
  input:focus {
    font-weight: normal;
    border-color: #80c565;
    outline: none;
    ~ label {
      color: #80c565 !important;
    }
  }

  &.invalid {
    color: #fd5d93 !important;
    i {
      font-size: 14px;
      position: absolute;
      top: 30px;
      right: 10px;
      transition: all 0.3s ease;
    }
    .input-error {
      display: block;
      font-size: 12px;
      text-align: left;
      color: $error;
    }

    & input {
      border-color: $error;
      &:focus {
        ~ label {
          color: $error !important;
        }
      }
    }
  }

  &.required {
    color: #80c565;
    i {
      font-size: 8px;
      position: absolute;
      top: 30px;
      right: 10px;
      transition: all 0.3s ease;
    }
    .input-label {
      &::before {
        content: "*";
        color: $error;
        font-size: 8px;
        vertical-align: middle;
      }
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1f2251 inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  label {
    position: absolute;
    top: -10%;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    font-weight: 300;
    color: #000;
  }

  .input-field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
}
</style>