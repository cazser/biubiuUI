<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>
<script>
export default{
name:'biuRow',
props:{
	gutter:{
		type: [Number, String]
	}
},
created(){
	console.log(this.$children);
},
mounted(){
	console.log(this.$children);
	this.$children.forEach((vm)=>{
	vm.gutter = this.gutter;
	})
},
computed:{
	rowStyle(){
          return {marginLeft: (-this.gutter/2)+'px', marginRight: (-this.gutter/2)+'px'}
	}
}
};
</script>
<style scoped lang="scss">
	.row{
	display: flex;
	}

</style>