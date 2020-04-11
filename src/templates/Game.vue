<template>
  <Layout :mode="mode">
    <v-container>

      <section v-if="mode === 'prep'" id="prep" class="contents">
        <h2 class="display-3">{{ $page.game.title }}</h2>
        <div class="description font-weight-medium">
          <div>{{ $page.game.description }}</div>
          <div class="credits">
            <div v-for="(credit, i) in $page.game.credits" :key="i" class="body-2">{{ credit.license }} <a :href="credit.link">{{ credit.author }}</a></div>
          </div>
        </div>
        <v-form class="font-weight-bold">
          <v-row><v-col cols="12"><v-slider v-model="config.count" label="読上げ数" min="1" :max="config.max" thumb-label="always" thumb-size="24" dense /></v-col></v-row>
          <v-row><v-col cols="12"><v-slider v-model="config.interval" label="出題間隔" min="1" max="5" step="0.1" thumb-label="always" thumb-size="24" dense /></v-col></v-row>
          <v-row>
            <v-col cols="6"><v-slider v-model="config.rate" dense label="発話速度" min="1" max="100" thumb-label thumb-size="24" /></v-col>
            <v-col cols="6"><v-slider v-model="config.pitch" dense label="声の高低" min="0" max="20" thumb-label thumb-size="24" /></v-col>
          </v-row>
          <v-row>
            <v-col cols="6"><v-switch v-model="config.random" dense :label="`${config.random ? 'ランダム' : 'シーケンス'}`" class="switch" /></v-col>
            <v-col cols="6"><v-switch v-model="config.read" dense :label="`${config.read ? '読み補正' : '表記読み'}`" :disabled="!config.readable" class="switch" /></v-col>
          </v-row>
          <v-row><v-col cols="12"><v-btn depressed small width="100%" color="primary">開始！</v-btn></v-col></v-row>
        </v-form>
      </section>

    </v-container>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    game(id: $id) {
      title
      description
      credits {
        license
        author
        link
      }
      configuration {
        lang
        count
        interval
        rate
      }
      introduction {
        text
        read
      }
      cards {
        text
        read
      }
    }
  }
</page-query>


<script lang="ts">
import Vue from 'vue';
import { Consts } from '~/config';
import { Card, Game } from '~/vendors/types';

export default Vue.extend({
  data: () => ({
    mode: 'prep',
    config: {} as Config
  }),
  mounted() {
    this.config = new Config(this.$page.game);
  },
  metaInfo() {
    return {
      title: this.$page.game.title
    };
  }
});

class Config {
  readonly lang: string;
  readonly max: number;

  count: number;
  interval: number;
  rate: number;
  pitch: number;

  random = true;
  read: boolean;
  readable: boolean;

  constructor(game: Game) {
    this.lang = game.configuration.lang;
    this.max = game.cards.length;
    this.count = game.configuration?.count || game.cards.length;
    this.interval = game.configuration?.interval || Consts.SYNTH.INTERVAL;
    this.rate = game.configuration?.rate || Consts.SYNTH.RATE;
    this.pitch = game.configuration?.pitch || Consts.SYNTH.PITCH;

    this.readable = game.cards.find((card: Card) => card.read) !== undefined;
    this.read = this.readable;
  }
}
</script>


<style lang="scss" scoped>
#prep {
  form {
    padding: 32px 8px 4px;
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .description {
    height: calc(100% - 280px);
    overflow: auto;
    white-space: pre-wrap;
    .credits {
      padding-top: 12px;
      text-align: right;
    }
  }

  .row {
    padding: 0 4px;
  }
  .col {
    padding: 0 2px;
    .switch {
      margin-top: 0;
      margin-bottom: 12px;
    }
  }
}
</style>

<style lang="scss">  // 'cuz Overriding the Vuetify.js style cannot be defined with the scoped attribute
#prep {
  .v-label {
    margin-right: 4px;
  }
  .v-messages {
    display: none;
  }
}
</style>
