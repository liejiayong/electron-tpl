<template>
  <el-row class="header-container">
    <el-col :span="10" class="lt">
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <Operation />
        </el-icon>
      </div>
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <HomeFilled />
        </el-icon>
        <span class="ico-txt">首页</span>
      </div>
    </el-col>
    <el-col :span="14" class="rt">
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <RefreshRight />
        </el-icon>
      </div>
      <div class="jy-btn-inflex">
        <el-icon :size="24">
          <MagicStick />
        </el-icon>
      </div>
      <Avatar></Avatar>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import Avatar from '../Avatar/index.vue';
const appInstance = getCurrentInstance();

const { Operation, HomeFilled, RefreshRight, MagicStick } = appInstance?.appContext.config.globalProperties.$icon;
</script>
