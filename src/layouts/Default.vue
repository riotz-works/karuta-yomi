<template>
  <v-app id="app" :style="wallpaper">

    <v-app-bar id="app-header" app flat fixed color="transparent">
      <g-link to="/"><g-image src="~/assets/app-icon.png" width="54" /></g-link>
      <v-toolbar-title>
        <g-link to="/"><h1 class="display-4">{{ $static.metadata.siteName }}</h1></g-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="actions">
        <v-menu left offset-x nudge-left="-8">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on"><v-icon>$menu</v-icon></v-btn>
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
      <small>© Since {{ inceptionYear }} <a href="https://riotz.works/">Riotz.works</a></small>
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

const home = require('~/assets/wallpaper/home.jpg');
const prep = require('~/assets/wallpaper/prep.jpg');
const play = require('~/assets/wallpaper/play.jpg');


export default Vue.extend({
  props: {
    mode: { type: String as PropType<'prep'|'play'|'done'>, required: false, default: '' }
  },
  computed: {
    inceptionYear: (): number => Consts.INCEPTION_YEAR,
    menu: (): { name: string; icon: string; action: string }[] => [
      { name: 'Home', icon: '$home', action: '/' },
      { name: 'About', icon: '$about', action: '/' }
    ],
    wallpaper(): object {
      let image = home;
      if (this.mode === 'prep') {
        image = prep;
      } else if (this.mode === 'play' || this.mode === 'done') {
        image = play;
      }
      return { background: `url('${image}') center top / cover no-repeat fixed` };
    }
  },
  metaInfo() {
    return {
      titleTemplate: (chunk): string => chunk !== Consts.DISPLAY_NAME ? `${chunk} | ${Consts.DISPLAY_NAME}` : Consts.DISPLAY_NAME
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
    padding-right: 2px;
  }
}

#app-footer {
  a {
    color: inherit;
  }
}

.menu a {
  padding: 0 20px 0 10px;
}
</style>
