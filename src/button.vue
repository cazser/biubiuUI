<template>
    <div>
	<button class="biu-button" v-if="!iconPosition || iconPosition==='left'">
         <svg v-if="icon" class="icon">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
        <slot>
        </slot>
    </button>
    <button class="biu-button" v-else>
        <slot></slot>
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
       
    </button>
    </div>
</template>

<script>
export default {
    props: ['icon', 'iconPosition']
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