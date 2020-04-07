import Vuetify from 'vuetify/lib';
import '~/assets/style/global.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { appOptions }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({});
}
