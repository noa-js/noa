import { createI18n } from 'vue-i18n';

import page from './page.yaml';

const i18n = createI18n({
  legacy: false,
  locale: 'en_US',
  messages: {
    ...page,
  },
});

export default i18n;
