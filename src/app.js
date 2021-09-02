import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Toast from './toast.vue'
import chai from 'chai';
import spies from 'chai-spies'
import plugin from './plugin.js'

//import Vue from 'vue';
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
Vue.component('biu-button-group', ButtonGroup)
Vue.component('biu-input', Input)
Vue.component('biu-row', Row);
Vue.component('biu-col', Col);
Vue.component('biu-toast', Toast);
Vue.use(plugin)
new Vue({
        el: '#app',
        data: {
            message: 'hi',
            loading1: false
        },
        methods: {},
        created() {
            this.$toast(`很多文字
            很多文字很多文字很多文字很多文字 很多文字很多文字很多文字很多文字
            `, {

            })
        }
    }

)