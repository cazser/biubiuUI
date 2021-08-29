<template>
  <div>
    <button
      class="biu-button"
      :class="{ [`icon-${iconPosition}`]: true }"
      @click="$emit('click')"
    >
      <biu-icon class="icon" v-if="icon && !loading" :name="icon"></biu-icon>
      <biu-icon v-if="loading" class="loading icon" name="loading"></biu-icon>
      <div class="content">
        <slot> </slot>
      </div>
    </button>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  components: {
    "biu-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value !== "left" && value !== "right") {
          return false;
        } else {
          return true;
        }
      },
    },
  },
};
</script>

<style lang="scss">
.biu-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  font: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}

.biu-button:hover {
  border-color: var(--button-color-hover);
}

.biu-button:active {
  background-color: var(--button-active-bg);
}

.biu-button:focus {
  outline: none;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite linear;
}
</style>