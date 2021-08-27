<template>
    <svg class="biu-icon">
       <use :xlink:href="`#i-${name}`"></use>
    </svg>
       
</template>

<script>
export default {
	props:['name']
}
</script>

<style>
	.biu-icon{
		width: 1em;
		height: 1em;
	}
</style>