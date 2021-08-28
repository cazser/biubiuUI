<template>
  <div>
    <biu-button
      icon="settings"
      icon-position="right"
      :loading="loading1"
      @click="loading1 = !loading1"
    >
      杜晓琳</biu-button
    >
    <biu-button :loading="true">something</biu-button>

    {{ message }}
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      message: "hi",
      loading1: false,
    };
  },
};
</script>

<style>
</style>