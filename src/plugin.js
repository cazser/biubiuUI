import Toast from './toast.vue'
export default {
    install(Vue, option) {

        Vue.prototype.$toast = function(message) {

            var Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: "知道了",
                        callback() {
                            console.log("用户说他知道了")
                        }
                    }
                }
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);

        }
    }
}