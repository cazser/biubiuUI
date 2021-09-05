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
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Test from './test.vue'
import TestIn from './test-in.vue'
import PopOver from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'


//import Vue from 'vue';
Vue.component('biu-button', Button);
Vue.component('biu-icon', Icon);
Vue.component('biu-button-group', ButtonGroup)
Vue.component('biu-input', Input)
Vue.component('biu-row', Row);
Vue.component('biu-col', Col);
Vue.component('biu-toast', Toast);
Vue.component('biu-tabs', Tabs);
Vue.component('biu-tabs-head', TabsHead);
Vue.component('biu-tabs-body', TabsBody);
Vue.component('biu-tabs-item', TabsItem);
Vue.component('biu-tabs-pane', TabsPane);
Vue.component('test', Test);
Vue.component('test-in', TestIn)
Vue.component('biu-popover', PopOver)
Vue.component('biu-collapse', Collapse)
Vue.component('biu-collapse-item', CollapseItem)
Vue.use(plugin)
new Vue({
        el: '#app',
        data: {
            message: 'hi',
            loading1: false,
            selectedTab: "sports"
        },
        methods: {

        },
        created() {}
    }

)