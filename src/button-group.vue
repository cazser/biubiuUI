<template>
  <div class="biu-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.biu-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .biu-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
  }
}
</style>