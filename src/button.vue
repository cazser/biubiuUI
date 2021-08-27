<template>
	<button class="biu-button">hi</button>
</template>

<script>
export default {

}

</script>

<style lang="css">
 
    .biu-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
	
	.biu-button:hover {
        border-color: var(--button-color-hover);
   	}
    
    .biu-button:active {
    	    background-color: var(--button-active-bg);
    }
    
    .biu-button:focus {
    	    outline: none;
    }
    
    
   
</style>