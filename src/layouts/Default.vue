<template>
  <v-app id="app" :style="wallpaper">

    <v-app-bar id="app-header" app flat fixed color="transparent">
      <g-link to="/"><g-image src="~/assets/app-icon.png" width="54" :alt="$static.metadata.siteName" /></g-link>
      <v-toolbar-title>
        <g-link to="/"><h1 class="display-4">{{ $static.metadata.siteName }}</h1></g-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="actions">
        <v-menu left offset-x nudge-left="-8">
          <template v-slot:activator="{ on }">
            <v-btn icon aria-label="メニュー" v-on="on"><v-icon>$menu</v-icon></v-btn>
          </template>
          <v-list dense class="menu">
            <v-list-item v-for="(item, i) in menu" :key="i" gridsome :to="item.action">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-content>
      <slot />
    </v-content>

    <v-footer id="app-footer" app flat fixed color="transparent">
      <v-spacer />
      <small>© Since {{ inceptionYear }} <a :href="url">Riotz.works</a></small>
    </v-footer>

  </v-app>
</template>


<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>


<script lang="ts">
import Vue, { PropType } from 'vue';
import { Consts } from '~/config';

const logo = require('~/assets/app-icon.png');
const home = require('~/assets/wallpaper/home.jpg');
const prep = require('~/assets/wallpaper/prep.jpg');
const play = require('~/assets/wallpaper/play.jpg');
const info = require('~/assets/wallpaper/info.jpg');


export default Vue.extend({
  props: {
    mode: { type: String as PropType<'prep'|'play'|'done'|'info'>, required: false, default: '' }
  },
  computed: {
    url: (): string => Consts.APP_HOST,
    inceptionYear: (): number => Consts.INCEPTION_YEAR,
    menu: (): { name: string; icon: string; action: string }[] => [
      { name: 'Home', icon: '$home', action: '/' },
      { name: 'About', icon: '$about', action: '/about' }
    ],
    wallpaper(): object {
      let image = home;
      if (this.mode === 'prep') {
        image = prep;
      } else if (this.mode === 'play' || this.mode === 'done') {
        image = play;
      } else if (this.mode === 'info') {
        image = info;
      }
      return { background: `url('${image}') center top / cover no-repeat fixed` };
    }
  },
  metaInfo() {
    return {
      titleTemplate: (chunk): string => chunk !== Consts.DISPLAY_NAME ? `${chunk} | ${Consts.DISPLAY_NAME}` : Consts.DISPLAY_NAME,
      meta: [
        { key: 'description', name: 'description', template: (chunk: string): string => chunk ? `${Consts.DESCRIPTION} - ${chunk}` : Consts.DESCRIPTION },

        { key: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { key: 'twitter:creator', name: 'twitter:creator', content: '@riotz_works' },
        { key: 'twitter:site', name: 'twitter:site', content: Consts.APP_HOST },
        { key: 'twitter:image', name: 'twitter:image:src', content: `${Consts.APP_HOST}${logo}` },
        { key: 'twitter:title', name: 'twitter:title', template: (chunk: string): string => chunk ? `${chunk} | ${Consts.DISPLAY_NAME}` : Consts.DISPLAY_NAME },
        { key: 'twitter:description', name: 'twitter:description', template: (chunk: string): string => chunk ? `${Consts.DESCRIPTION} - ${chunk}` : Consts.DESCRIPTION },

        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:site_name', property: 'og:site_name', content: Consts.DISPLAY_NAME },
        { key: 'og:url', property: 'og:url', content: Consts.APP_HOST },
        { key: 'og:image', property: 'og:image', content: `${Consts.APP_HOST}${logo}` },
        { key: 'og:title', property: 'og:title', template: (chunk: string): string => chunk ? `${chunk} | ${Consts.DISPLAY_NAME}` : Consts.DISPLAY_NAME },
        { key: 'og:description', property: 'og:description', template: (chunk: string): string => chunk ? `${Consts.DESCRIPTION} - ${chunk}` : Consts.DESCRIPTION }
      ] as never
    };
  }
});
</script>


<style lang="scss">
#app {
  height: 100%;
  background-size: cover;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before{
    background: inherit;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    content: '';
    filter: blur(4px);
  }
}

#app-header {
  h1 {
    padding: 0 3px;
  }
  img {
    padding: 3px 0 0 0;
  }
  .actions {
    margin-top: -6px;
    padding-right: 2px;
  }
}

.menu a {
  padding: 0 20px 0 10px;
}

#app-footer {
  a {
    color: inherit;
  }
}
</style>
