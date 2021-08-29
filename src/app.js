import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import chai from 'chai';
import spies from 'chai-spies'
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

chai.use(spies)
    //单元测试
    {
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings"
            }
        });
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        chai.expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
    } {
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings",
                loading: true
            }
        });
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        chai.expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    } {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings"
            }
        });
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)

        chai.expect(order).to.eq("1")
    } {
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings"
            }
        });
        vm.$mount("#test")
        let spy = chai.spy(function() {})
        vm.$on('click', spy())
        let button = vm.$el
        button.click();
        chai.expect(spy).to.have.been.called()
    }