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
import Tabs from './tabs.vue'
import TabsHeader from './tabs-header.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from ',/tabs-pane.vue'

//import Vue from 'vue';
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
Vue.component('biu-button-group', ButtonGroup)
Vue.component('biu-input', Input)
Vue.component('biu-row', Row);
Vue.component('biu-col', Col);
Vue.component('biu-toast', Toast);
Vue.component('biu-tabs', Tabs);
Vue.component('biu-tabs-header', TabsHeader);
Vue.component('biu-tabs-body', TabsBody);
Vue.component('biu-tabs-item', TabsItem);
Vue.component('biu-tabs-pane', TabsPane)
Vue.use(plugin)
new Vue({
        el: '#app',
        data: {
            message: 'hi',
            loading1: false
        },
        methods: {
            showToast() {
                this.$toast(
                    `您的智商目前为${Number.parseInt(Math.random()*100)}您的智商需要充值`, {
                        position: "middle",
                        closeButton: {
                            text: "充值",
                            callback() {
                                console.log('他说已经充值了');
                            }
                        },
                        autoClose: false
                    })

            }
        },
        created() {}
    }

)