<template>
  index page
  <el-button>ssss</el-button>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import useUserStore from '@/store/user';
const userStore = useUserStore();
userStore.setToken('1688');
const { userInfo } = storeToRefs(userStore);
const token = userStore.token;
console.log(`token: ${token} \n\t userInfo: ${JSON.stringify(userInfo)} `);
</script>
