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
          <v-row><v-col cols="12"><v-select v-model="config.voiceIndex" :items="config.voices" dense label="音声" /></v-col></v-row>
          <v-row><v-col cols="12"><v-btn depressed small width="100%" color="primary" @click="start">開始！</v-btn></v-col></v-row>
        </v-form>
      </section>

      <section v-if="mode === 'play'" id="play">
        <v-card raised hover :ripple="false" class="card mx-auto" @click="skip()">
          <g-image src="~/assets/image/card-design.jpg" />
          <v-card-title class="text">{{ card.text.replace(/[\u{3000}]/ug, '\n') }}</v-card-title>
        </v-card>
        <v-row class="actions">
          <v-col cols="6"><v-btn outlined block color="primary" @click="skip()">つぎ！</v-btn></v-col>
          <v-col v-if="!field.paused" cols="6"><v-btn outlined block color="secondary" @click="pause()">まった</v-btn></v-col>
          <v-col v-if="field.paused && field.resumable" cols="6"><v-btn outlined block @click="resume()">つづき</v-btn></v-col>
        </v-row>
      </section>

      <section v-if="mode === 'done'" id="done" class="contents">
        <h2 class="display-3">終了</h2>
        <v-container>
          <v-row justify="center">
            <v-col cols="10"><v-btn x-large block color="primary" class="font-weight-black" @click="start()">もぅ いっかい！！</v-btn></v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="10"><v-btn outlined block color="secondary" gridsome to="/">やめる</v-btn></v-col>
          </v-row>
        </v-container>
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
    config: {} as Config,
    field: {} as Field,
    card: undefined as Card | undefined
  }),
  mounted() {
    this.config = new Config(this.$page.game);
    this.field = new Field(this.config, this.$page.game);
  },
  destroyed() {
    this.field.destroy();
  },
  methods: {
    start(): void {
      this.mode = 'play';
      this.reset();
      this.next();
    },
    next(): void {
      this.card = this.field.openCard();
      if (!this.card) {
        this.mode = 'done';
        return;
      }
      this.field.readAloud(this.card, this.config, this.next);
    },
    skip(): void {
      this.field.skip(this.next);
    },
    pause(): void {
      this.field.pause();
    },
    resume(): void {
      this.field.resume(this.next);
    },
    reset(): void {
      this.field.destroy();
      this.field = new Field(this.config, this.$page.game);
    }
  },
  metaInfo() {
    const title = this.$page.game.title;
    const description = this.$page.game.description;
    return {
      title,
      meta: [
        { key: 'description', content: description, template: true },
        { key: 'twitter:title', content: title, template: true },
        { key: 'twitter:description', content: description, template: true },
        { key: 'og:title', content: title, template: true },
        { key: 'og:description', content: description, template: true }
      ] as never
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

  voiceIndex = 0;
  voices: SpeechSynthesisVoiceItem[] = [];

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

    this.createVoices();
    speechSynthesis.onvoiceschanged = (): void => this.createVoices();

    this.readable = game.cards.find((card: Card) => card.read) !== undefined;
    this.read = this.readable;
  }

  private createVoices(): void {
    this.voices = speechSynthesis.getVoices()
      .filter((voice: SpeechSynthesisVoice) => voice.lang.match(`${this.lang}|${this.lang.replace('-', '_')}`))
      .map((voice: SpeechSynthesisVoice, index: number) => {
        const item = voice as SpeechSynthesisVoiceItem;
        if (item.default) { this.voiceIndex = index; }
        item.text = voice.name;
        item.value = index;
        return item;
      }) as SpeechSynthesisVoiceItem[];
  }

  get voice(): SpeechSynthesisVoiceItem { return this.voices[this.voiceIndex]; }
}

class Field {
  private library: Card[];

  private index = -1;
  private timerId = 0;
  private synthesisPaused = false;
  private status: 'open' | 'interval' | 'skip' | 'pause' | 'paused' | 'done' = 'open';

  constructor(config: Config, game: Game) {
    addEventListener('beforeunload', () => { speechSynthesis.cancel(); });
    const cards = config.random ? shuffle(game.cards) : game.cards;
    this.library = game.introduction ? [ game.introduction, ...cards ] : cards;
    if (config.count) {
      this.library.length = config.count + (game.introduction ? 1 : 0);
    }
  }

  get paused(): boolean { return this.status === 'pause' || this.status === 'paused'; }
  get resumable(): boolean { return this.synthesisPaused; }

  openCard(): Card | undefined {
    if (this.library.length <= ++this.index) {
      return undefined;
    }
    this.status = 'open';
    return this.library[this.index];
  }

  readAloud(card: Card, config: Config, onend: () => void): void {
    speechSynthesis.cancel();
    const synth = this.createSynth(card, config, (): void => {
      if (this.status === 'pause' || this.status === 'done') {
        this.status = 'paused';
      } else if (this.status === 'skip') {
        onend();
      } else {
        this.status = 'interval';
        this.timerId = setTimeout(onend, config.interval * 1000);
      }
    });
    speechSynthesis.speak(synth);
  }

  skip(next: () => void): void {
    clearTimeout(this.timerId);
    if (this.status === 'interval' || this.status === 'paused') {
      return next();
    }
    this.status = 'skip';
    return speechSynthesis.cancel();
  }

  pause(): void {
    clearTimeout(this.timerId);
    speechSynthesis.pause();
    if (this.status === 'interval') {
      this.status = 'paused';
    } else {
      this.status = 'pause';
    }
  }

  resume(next: () => void): void {
    if (this.status === 'paused') {
      return next();
    }
    this.status = 'open';
    return speechSynthesis.resume();
  }

  destroy(): void {
    this.status = 'done';
    clearTimeout(this.timerId);
    speechSynthesis.cancel();
  }

  private createSynth(card: Card, config: Config, onend: () => void): SpeechSynthesisUtterance {
    const synthesis = new SpeechSynthesisUtterance();
    synthesis.text = config.read ? card.read || card.text : card.text;
    synthesis.lang = config.lang;
    synthesis.rate = config.rate / 10;
    synthesis.pitch = config.pitch / 10;
    synthesis.voice = config.voice;
    synthesis.volume = Consts.SYNTH.VOLUME;
    synthesis.onend = onend;
    synthesis.onpause = (): void => {
      this.synthesisPaused = speechSynthesis.paused;
    };
    return synthesis;
  }
}

/* eslint-disable no-plusplus */  // 'cuz Fisher–Yates shuffle algorithm
const shuffle = <T> (array: Array<T>): Array<T> => {
  const list = array.slice();
  for (let i = list.length - 1; 0 < i; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [ list[i], list[r] ] = [ list[r], list[i] ];
  }
  return list;
};

type SpeechSynthesisVoiceItem = SpeechSynthesisVoice & {
  text: string;
  value: number;
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
    height: calc(100% - 320px);
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

#play {
  .card {
    background: #FFF;
    border: 12px solid;
    padding: 16px;
    margin-top: 20px;
    height: calc(100% - 180px);
    width: 95%;
    transform: rotate(-2deg);
    writing-mode: vertical-rl;
    position: relative;

    .text {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%, 0%);
      font-size: 10vw;
      letter-spacing: .14em;
      line-height: 1.2em;
      white-space: pre;
      word-break: break-all;
      word-wrap: break-word;
    }

    img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .actions {
    padding-top: 12px;
  }
}

#done {
  background: none;
  text-align: center;
  padding-top: 50%;

  h2 {
    font-size: 96px !important;
    padding-bottom: 32px;
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
