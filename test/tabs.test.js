const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'
import sinon from 'sinon'
Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('biu-tabs', Tabs);
Vue.component('biu-tabs-head', TabsHead);
Vue.component('biu-tabs-body', TabsBody);
Vue.component('biu-tabs-item', TabsItem);
Vue.component('biu-tabs-pane', TabsPane);
describe('Toast', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })



})