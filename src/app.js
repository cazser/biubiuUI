import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
//import Vue from 'vue';
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
Vue.component('biu-button-group', ButtonGroup)
new Vue({
        el: '#app',
        data: {
            message: 'hi',
            loading1: false
        }
    }

)

//单元测试
{
    const Constructor = Vue.extend(Button);
}