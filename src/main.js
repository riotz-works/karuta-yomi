import '~/assets/style/global.scss';
import Vuetify from 'vuetify/lib';
import DefaultLayout from '~/layouts/Default.vue';

const css = [
  'https://fonts.googleapis.com/earlyaccess/hannari.css',
  'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap',
  'https://fonts.googleapis.com/css?family=Quicksand&display=swap',
  'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap',
  'https://unicons.iconscout.com/release/v2.1.3/css/unicons.css'
];


export default function(Vue, { appOptions, head }) {
  Vue.component('Layout', DefaultLayout);

  css.forEach((value) => {
    head.link.push({ rel: 'preload', href: value, as: 'style' });
    head.link.push({ rel: 'stylesheet', href: value, media: 'print', onload: 'this.media="all"' });
  });

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
        menu: 'uil-ellipsis-v',
        home: 'uil-home-alt',
        about: 'uil-info-circle',
        cards: 'uil-layer-group'
      }
    }
  });
}
