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
    <el-affix position="bottom"><el-button @click="onNavBack" :icon="DArrowLeft">返回上一级</el-button></el-affix>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import iHeader from './Header/index.vue';
import iFooter from './Footer/index.vue';
import Menu from './Menu/index.vue';
import Main from './Main/index.vue';
import './layout.scss';

const appInstance = getCurrentInstance();
const router = useRouter();
const { DArrowLeft } = appInstance?.appContext.config.globalProperties.$icon;
console.log(appInstance);

function onNavBack() {
  router.back();
}
// test
// import { useRouter } from 'vue-router';
// const router = useRouter()
// router.push('/login')
</script>
