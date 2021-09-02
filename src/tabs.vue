<template>
	<div class="tabs">
	 <slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs',
props:{
	selected:{
	type: String,
	required: true
	}
},
created(){
	//this.$emit("update:select", "xxx")
}

};
</script>
<style scoped>
.tabs{

}
</style>