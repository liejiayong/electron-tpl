<template>
  <el-row class="header-container">
    <el-col :span="10" class="lt">
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <Operation />
        </el-icon>
      </div>
      <div @click="router.push({ name: 'Home' })" class="jy-btn-inflex">
        <el-icon :size="24">
          <HomeFilled />
        </el-icon>
        <span class="ico-txt">首页</span>
      </div>
    </el-col>
    <el-col :span="14" class="rt">
      <div class="jy-btn-inflex">
        <SelectI18n></SelectI18n>
      </div>
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <RefreshRight />
        </el-icon>
      </div>
      <div class="jy-btn-inflex"><Theme></Theme></div>
      <Avatar></Avatar>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import SelectI18n from '@/components/select/i18n.vue';
import Avatar from '../Avatar/index.vue';
import Theme from '../Theme/index.vue';
const appInstance = getCurrentInstance();
const router = useRouter();

const { Operation, HomeFilled, RefreshRight } = appInstance?.appContext.config.globalProperties.$icon;
</script>
