import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import chai from 'chai';
import spies from 'chai-spies'

//import Vue from 'vue';
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
Vue.component('biu-button-group', ButtonGroup)
Vue.component('biu-input', Input)
Vue.component('biu-row', Row);
Vue.component('biu-col', Col);
new Vue({
        el: '#app',
        data: {
            message: 'hi',
            loading1: false
        }
    }

)