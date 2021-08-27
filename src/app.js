import Button from './button.vue'
import Icon from './icon.vue'
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
new Vue({
        el: '#app',
        data: {
            message: 'hi'
        }
    }

)