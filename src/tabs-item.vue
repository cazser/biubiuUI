<template>
	<div class='tabs-item' @click="onClick" :class="classes">
	<slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs-item',
props:{
 disabled:{
	 type: Boolean,
	 default: false
 },
 name:{
	 type:String|Number,
	 required:true
 }
},
inject: ['b'],
data(){
	return {active: false}
},
created(){
	this.b.$on("update:selected", (name)=>{
		if(name===this.name){
			this.active = true;
		}else{
		this.active = false;
		}
	})
},
computed:{
	classes(){
		return {active:this.active,
		disabled: this.disabled}
	}
},
methods:{
	onClick(){
		if(this.disabled){
			return;
		}
		this.b.$emit("update:selected", this.name)
	}
}

};
</script>
<style scoped
 lang="scss">
 $blue: blue;
.tabs-item{
padding: 0 2em;
flex-shrink: 0;
cursor: pointer;

height: 100%;
display: flex;
align-items: center;
flex-direction: row;
&.active{
	color: $blue;
	border-bottom: 2px solid $blue;
	margin-bottom: -2px;
}
&.disabled{
	color: grey;
	cursor: not-allowed;
}
}


</style>