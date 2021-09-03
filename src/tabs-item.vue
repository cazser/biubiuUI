<template>
	<div class='tabs-item' @click="xxx">
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

created(){
	this.b.$on("update:selected", (name)=>{
		console.log(name)
	})
},
methods:{
	xxx(){
		this.b.$emit("update:selected", this.name)
	}
}

};
</script>
<style scoped>
.tabs-item{

}


</style>