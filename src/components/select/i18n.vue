<template>
  <el-dropdown @command="changeLang">
    <span class="el-dropdown-link">
      语言
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langMap"
          :command="item.value"
          :key="`locale-${item.value}`"
        >{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { changeLang, langMap } from '@/i18n/index';
</script>
