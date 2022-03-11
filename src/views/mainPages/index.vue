<template>
  <div class="main">
    <img alt="Noa logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Noa App" />
    <el-button type="primary" @click="handleClick">Go To Login</el-button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const handleClick = () => {
    router.push({ name: 'user-login' });
  };
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixins.scss';
  .main {
    @include main;
  }

  .el-button {
    font-size: 14px;
    padding: 4px 12px;
    margin-top: 12px;
    --el-button-bg-color: #2bd471;
    --el-button-border-color: #2bd471;
    --el-button-hover-bg-color: #23a95b;
    --el-button-hover-border-color: #23a95b;
    --el-button-active-bg-color: #23a95b;
    --el-button-active-border-color: #23a95b;
  }
</style>
