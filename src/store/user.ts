import { h } from 'vue';
import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus';
import { login } from '@/api/auth';

const useUserStore = defineStore('user', {
  state: (): IUserStore => {
    return {
      token: '',
      userInfo: {
        id: 1,
        nickname: 'JyLie',
        name: 'L',
        avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
        isAuth: true,
      },
    };
  },
  getters: {
    getUserInfo(): GlobalUtils.Nullable<IUserInfoProps> {
      return this.userInfo || null;
    },
  },
  actions: {
    async login(params: IUserForm) {
      const [err, userInfo] = await login(params);
      if (err) {
        ElNotification({
          title: `温馨提示`,
          message: h('i', { style: 'color: red' }, '登录接口异常，未正确返回'),
          type: 'error',
        });
        return;
      }

      const hour = new Date().getHours();
      const timeTips =
        hour < 8 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour <= 18 ? '下午好' : '晚上好';
      ElNotification({
        title: `欢迎登录${userInfo?.user}，${timeTips}`,
        message: h('i', { style: 'color: back' }, '登录接口异常，未正确返回'),
        type: 'success',
      });
    },
    setToken(token: IUserStore['token']) {
      this.token = token;
    },
    setUserInfo(info: GlobalUtils.Nullable<IUserInfoProps>) {
      this.userInfo = info ?? null;
    },
  },
});

export default useUserStore;
