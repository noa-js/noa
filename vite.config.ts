import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import { viteMockServe } from 'vite-plugin-mock';
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';
import { createHtmlPlugin } from 'vite-plugin-html';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import svgLoader from 'vite-svg-loader';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

import pages from './config/pages';
import proxy from './config/proxy';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      vue(),
      Pages(pages),
      Layouts(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.ts',
        template: 'public/index.html',
        inject: {
          data: {
            title: env.VITE_APP_NAME,
          },
        },
      }),
      eslintPlugin(),
      ViteWebfontDownload([]),
      svgLoader(),
      vueI18n({
        include: resolve(__dirname, 'src/locales/**'),
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      port: 8080,
      open: true,
      cors: true,
      host: true,

      proxy: proxy[mode],
    },
  };
};
