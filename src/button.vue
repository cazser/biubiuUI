<template>
	<button class="biu-button">hi</button>
</template>

<script>
export default {

}

</script>

<style lang="scss">
 
    .biu-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
	
	&:hover {
        border-color: var(--button-color-hover);
   	}
    
    	&:active {
    	    background-color: var(--button-active-bg);
    	}
    
    	&:focus {
    	    outline: none;
    	}
    }
    
   
</style>