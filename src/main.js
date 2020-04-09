import Vuetify from 'vuetify/lib';
import '~/assets/style/global.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { appOptions, head }) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/hannari.css' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap' });
  head.link.push({ rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v2.1.3/css/unicons.css' });

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#00552E',
          secondary: '#333631',
          accent: '#1853B5',
          error: '#F73B70',
          info: '#007BBB',
          success: '#7B8D42',
          warning: '#EE7800'
        }
      }
    },
    icons: {
      values: {
        home: 'uil-home-alt',
        about: 'uil-info-circle'
      }
    }
  });
}
