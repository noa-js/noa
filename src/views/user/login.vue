<template>
  <div class="main">
    <img alt="Noa logo" src="@/assets/logo.png" />
    <HelloWorld msg="Login" />
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/styles/mixins.scss';
  .main {
    @include main;
  }
</style>

<route lang="yaml">
meta:
  layout: unauthenticated
</route>
