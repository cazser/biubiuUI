import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import { expect } from 'chai';
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
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings"
            }
        });
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
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
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
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

        expect(order).to.eq("1")
    } {
        const constructor = Vue.extend(Button)
        const vm = new constructor({
            propsData: {
                icon: "settings"
            }
        });
        vm.$mount()
        vm.$on('click', function() {
            console.log(1)
        })
        let button = gbutton.$el
        button.click();
    }