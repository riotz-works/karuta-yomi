import Vuetify from 'vuetify/lib';
import '~/assets/style/global.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { appOptions, head }) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({ rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v2.1.3/css/unicons.css' });

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    icons: {
      values: {
        home: 'uil-home-alt',
        about: 'uil-info-circle'
      }
    }
  });
}
