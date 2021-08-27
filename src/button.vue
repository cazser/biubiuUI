<template>
    <div>
	<button class="biu-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
                <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
        <slot>
        </slot>
        </div>
    </button>
   
    </div>
</template>

<script>
export default {
    props: ['icon', 'iconPosition']
}

</script>

<style lang="scss">
 
    .biu-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        font: inherit;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        
        >.icon{
            order:1;
            margin-right: .3em;
        }

        >.content{
            order: 2;
        }
        &.icon-right{
            >.content{
                order:1;
            }
            >.icon{
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
        }
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