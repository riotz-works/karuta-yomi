import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $page: {
      game: Game;
    };
  }
}

export type Game = {
  title: string;
  description?: string;
  credits?: Credit[];
  configuration: Configuration;
  introduction?: Card;
  cards: Card[];
};

export type Credit = {
  license?: string;
  author?: string;
  link?: string;
};

export type Configuration = {
  lang: string;
  count?: number;
  interval?: number;
  rate?: number;
  pitch?: number;
}

export type Card = {
  text: string;
  read?: string;
}
