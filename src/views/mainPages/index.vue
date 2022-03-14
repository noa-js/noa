<template>
  <div class="main">
    <img alt="Noa logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Noa App" />
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/styles/mixins.scss';
  .main {
    @include main;
  }
</style>
