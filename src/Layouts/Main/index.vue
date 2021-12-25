<template>
  <div>国际化：{{ $t(`message.Home`) }}</div>
  <SelectI18n></SelectI18n>
  <el-button type="primary" :loading="true">Loading</el-button>
</template>

<script setup lang="ts">
import SelectI18n from '@/components/select/i18n.vue';
console.log(process.env)
</script>
