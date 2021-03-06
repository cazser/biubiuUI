import Toast from './toast.vue'

function createToast({ Vue, message, propsData }) {
    var Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData

    });
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
    return toast;

}
let currentToast;
export default {
    install(Vue, option) {

        Vue.prototype.$toast = function(message, toastOptions) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions });

        }
    }
}