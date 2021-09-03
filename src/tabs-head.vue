<template>
	<div class='tabs-head'>
	<slot></slot>
	<div class="actions-wrapper">
	<slot name="actions" ></slot>
	</div>
	</div>
</template>
<script>
export default{
name:'tabs-head',
inject: ['b'],

created(){
}

};
</script>
<style scoped lang="scss">
$height: 40px;
.tabs-head{
	display: flex;
	height: $height;
	justify-content: flex-start;
	align-items: center;
	border: 1px solid red;
>.actions-wrapper{
	margin-left: auto;
}
}


</style>