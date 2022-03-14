import { createI18n } from 'vue-i18n';

import pageEnUS from './page/en_US.yaml';

const i18n = createI18n({
  legacy: false,
  locale: 'en_US',
  messages: {
    en_US: {
      ...pageEnUS,
    },
  },
});

export default i18n;
