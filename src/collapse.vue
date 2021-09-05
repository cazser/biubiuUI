<template>
	<div class='collapse'>
		<slot></slot>
	</div>
</template>
<script>
export default{
name:'collapse',
data(){
	return{
		eventBus: new Vue()
	}
},
props:{
	single:{
		type:Boolean,
		default:false
	}
},
provide(){
	if(this.single){
		return {
		eB: this.eventBus
		}
	}
}

};
</script>
<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse{
border-radius: $border-radius;
border: 1px solid $grey;
overflow: hidden;
}


</style>