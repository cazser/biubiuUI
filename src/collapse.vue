<template>
	<div class='collapse'>
		<slot></slot>
	</div>
</template>
<script>
export default{
name:'collapse'

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