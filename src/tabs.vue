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
	},
	direction:{
		type: String,
		default: "horizontal",
		validator(value){
			return ['horizontal', 'vertical'].indexOf(value)>=0;
		}
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