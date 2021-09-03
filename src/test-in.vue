<template>
	<div class='test-in'>
		{{a}}
	</div>
</template>
<script>
export default{
name:'test-in',
inject: ["a"],
created(){
	console.log("aaa")
	console.log(this.a);
}
}
</script>
<style scoped>
.test-in{

}


</style>