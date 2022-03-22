<template>
  <el-container class="sys-container">
    <el-aside width="200px"><Menu></Menu></el-aside>
    <el-container class="main-container">
      <el-header>
        <iHeader></iHeader>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <iFooter></iFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import iHeader from './Header/index.vue';
import iFooter from './Footer/index.vue';
import Menu from './Menu/index.vue';
import Main from './Main/index.vue';
import './layout.scss';

// test
// import { useRouter } from 'vue-router';
// const router = useRouter()
// router.push('/login')
</script>
