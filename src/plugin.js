import Toast from './toast.vue'
export default {
    install(Vue, option) {

        Vue.prototype.$toast = function(message) {

            var Constructor = Vue.extend(Toast);
            let toast = new Constructor();
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);

        }
    }
}