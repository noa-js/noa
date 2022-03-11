<template>
  <router-view />
</template>

<script lang="ts">
  import { watchEffect } from 'vue';
  import { useTitle } from '@vueuse/core';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';

  const useFormatTitle = () => {
    const { t } = useI18n();
    const router = useRouter();
    const title = useTitle();

    watchEffect(() => {
      const routeName = router.currentRoute.value.name?.toString();

      if (typeof routeName == 'undefined') {
        return;
      }

      const i18nPath = `page-${routeName}`;
      let newTitle = t(i18nPath);

      title.value = `${newTitle} | ${import.meta.env.VITE_APP_NAME}`;
    });
  };
</script>

<script setup lang="ts">
  useFormatTitle();
</script>
