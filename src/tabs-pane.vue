<template>
	<div class="tabs-pane">
	 <slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs-pane',
inject: ['b'],

created(){
	this.b.$on("update:selected", (name)=>{
		console.log(name)
	})
}
};
</script>
<style scoped>
.tabs-pane{

}


</style>