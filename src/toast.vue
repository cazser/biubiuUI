<template>
	<div class="toast">
	 <slot></slot>
		<div class="line"></div>
	 <span class="close" v-if="closeButton"
	       @click="onClickClose"> 
	 {{closeButton.text}}</span>
	</div>
</template>
<script>

export default{
name: "toast",
props:{
 autoClose:{
	 type:Boolean,
 	default: true
},
autoCloseDelay:{
	type: Number,
	default: 5
},
closeButton:{
type: Object,
default: ()=>{
return{
	text: "关闭",
	callback: undefined
}
}
}
},
mounted(){
	if(this.autoClose){
	setTimeout(()=>{
		this.close()
	}, this.autoCloseDelay*1000)
	}
},
methods:{
 close(){
this.$el.remove();
this.$destroy();	 
 },
 onClickClose(){
	 this.close();
	 if(this.closeButton && typeof this.closeButton.callback==='function'){
	 this.closeButton.callback(this);
	 }
 },
 log(){
	 console.log("测试")
 }
}

};
</script>
<style scoped lang="scss">
	$font-size: 14px;
	$toast-height: 40px;
	$toast-bg:  rgba(0,0,0,0.75);
  .toast{
     position: fixed;
     top:0;
     left:50%;
     transform: translateX(-50%);
     font-size: $font-size;
     line-height: 1.8;
     height: $toast-height;
     display: flex;
     align-items: center;
     background: $toast-bg;
     color: white;
     border-radius: 4px;
     box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
     padding: 0 16px;
  }

	.close{
		padding: 16px;
	}

	.line{
		height:100%;
		border: 1px solid #666;
		margin-left: 16px;
	}
</style>