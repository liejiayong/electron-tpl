<template>
  <el-container class="sys-container">
    <el-aside width="200px"><Menu></Menu></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Main from './Main/index.vue'
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
.sys-container {
  height: 100vh;
  overflow: hidden;
}
</style>
