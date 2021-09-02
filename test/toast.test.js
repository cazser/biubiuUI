const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'
import sinon from 'sinon'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('props', function() {
        it('接受autoClose', (done) => {
                let div = document.createElement('div')
                document.body.appendChild(div);
                const Constructor = Vue.extend(Toast)
                const vm = new Constructor({
                    propsData: {
                        autoClose: true,
                        autoCloseDelay: 1
                    }
                }).$mount(div)
                setTimeout(() => {
                    expect(document.body.contains(vm.$el)).to.eq(false)
                    done()
                }, 1500)
            }),
            it('接受closeButton', () => {
                let div = document.createElement('div')
                document.body.appendChild(div);
                const callback = sinon.fake()
                const Constructor = Vue.extend(Toast)
                const vm = new Constructor({
                    propsData: {
                        closeButton: {
                            text: "关闭吧",
                            callback,
                        }
                    }

                }).$mount(div)
                let closeButton = vm.$el.querySelector('.close')
                closeButton.click();
                expect(callback).to.have.been.called;
            })
    })
})