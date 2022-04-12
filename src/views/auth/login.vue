<template>
  <div class="auth-container">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="panel">
          <el-form :model="formModel">
            <div class="fs-50">欢迎您！</div>
            <el-form-item class="mt-20">
              <el-input v-model="formModel.user" :prefix-icon="UserFilled" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="formModel.password" :type="passType" :prefix-icon="Lock" placeholder="请输入密码">
                <template #suffix>
                  <el-icon class="el-input__icon" @click="onPassStatus">
                    <View></View>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button size="large" type="primary" @click="onSubmit">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from '@/store/user';
const appInstance = getCurrentInstance();
const userStore = useUserStore();

const { UserFilled, Lock, View } = appInstance?.appContext.config.globalProperties.$icon;
const passType = ref('password');
function onPassStatus(): void {
  passType.value = passType.value === 'password' ? 'text' : 'password';
}

const formModel = reactive({
  user: 'JyLie',
  password: '888888',
});

const router = useRouter();
async function onSubmit(): Promise<void> {
  var params = toRaw(formModel);
  await userStore.login(params);
  router.push({ name: 'AdminIndex' });
}
</script>
<style lang="scss" scoped>
@import './auth.scss';
</style>
