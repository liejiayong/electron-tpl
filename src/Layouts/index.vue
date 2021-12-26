<template>
  <el-container class="sys-container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import '@/utils';
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.sys-container {
  height: 100vh;
  overflow: hidden;
}
</style>
