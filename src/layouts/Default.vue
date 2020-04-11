<template>
  <v-app id="app" :style="wallpaper">

    <v-app-bar id="app-header" app flat fixed color="transparent">
      <g-link to="/"><g-image src="~/assets/app-icon.png" width="54" /></g-link>
      <v-toolbar-title>
        <g-link to="/"><h1 class="display-4">{{ $static.metadata.siteName }}</h1></g-link>
      </v-toolbar-title>
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


export default Vue.extend({
  props: {
    mode: { type: String as PropType<'prep'>, required: false, default: '' }
  },
  computed: {
    inceptionYear: (): number => Consts.INCEPTION_YEAR,
    wallpaper(): object {
      let image = home;
      if (this.mode === 'prep') {
        image = prep;
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
}

#app-footer {
  a {
    color: inherit;
  }
}
</style>
