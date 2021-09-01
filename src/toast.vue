<template>
	<div class="toast">
	</div>
</template>
<script>
Vue.prototype.$toast=function(){
	console.log("我是toast")
}
export default{
name: "toast"

};
</script>
<style scoped>
  .toast{

  }

</style>