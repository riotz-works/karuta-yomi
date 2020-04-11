import pkg from '../package.json';

export const Consts = Object.freeze({
  NAME: pkg.name,
  DISPLAY_NAME: pkg.displayName,
  DESCRIPTION: pkg.description,
  VERSION: pkg.version,

  INCEPTION_YEAR: 2020,

  SYNTH: {
    INTERVAL: 3,
    RATE: 10,
    PITCH: 10,
    VOLUME: 1.0
  }
});
