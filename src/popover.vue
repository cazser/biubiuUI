<template>
	<div class='popover' @click.stop="xxx">
	<div class="content-wrapper" v-if="visiable" @click.stop> 
	<slot name="content"></slot>
	</div>
	<slot ></slot>
	</div>
</template>
<script>
export default{
name:'popover',
data(){
	return {visiable: false}
},
methods:{
	xxx(){
		this.visiable = !this.visiable;
		if(this.visiable===true){
			console.log('visible为真');
			this.$nextTick(()=>{
				let eventHandler=()=>{
					this.visiable = false;
					document.removeEventListener('click', eventHandler)
				}
				
				document.addEventListener("click", eventHandler )
			})
		}
	}
}
};
</script>
<style scoped>
.popover{
display: inline-block;
vertical-align: top;
position: relative;
}
.content-wrapper{
	position: absolute;
	bottom: 100%;
	left: 0;
	border: 1px solid red;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

</style>