<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <img class="user-avatar" :src="userInfo?.avatar" alt="" />
      <SvgIcon icon-class="user"></SvgIcon>
      <div class="user-name hidden-sm-and-down">
        {{ userInfo?.nickname }}
        <el-icon class="el-icon--right"><ArrowDown /></el-icon>
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useUserStore from '@/store/user';
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const router = useRouter();

const appInstance = getCurrentInstance();
const { ArrowDown } = appInstance?.appContext.config.globalProperties.$icon;

function handleCommand(command: string) {
  switch (command) {
    case 'logout':
      logout();
      break;
    case 'userCenter':
      navUserCenter();
      break;
  }
}
function navUserCenter() {
  router.push('/user/index');
}
function logout() {
  // this.$baseConfirm('您确定要退出' + this.$baseTitle + '吗?', null, async () => {
  //   await this.$store.dispatch('user/logout');
  //   const { recordRoute } = this.$confOpts;
  //   if (recordRoute) {
  //     const fullPath = this.$route.fullPath;
  //     this.$router.push(`/login?redirect=${fullPath}`);
  //   } else {
  //     this.$router.push('/login');
  //   }
  // });
}
</script>
<style lang="scss" scoped>
.avatar-dropdown {
  padding: 0;
  height: 50px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;

  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-name {
    margin-left: 5px;
    position: relative;
    margin-left: 5px;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
-
