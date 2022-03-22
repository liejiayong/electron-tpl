import { defineStore } from 'pinia';

interface IUserInfoProps {
  id: number;
  name: string;
  nickname: string;
  avatar: string;
  isAuth: boolean;
}

interface UserState {
  token: string | undefined;
  userInfo: GlobalUtils.Nullable<IUserInfoProps>;
}

const useUserStore = defineStore('user', {
  state: (): UserState => {
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
    setToken(token: UserState['token']) {
      this.token = token;
    },
    setUserInfo(info: GlobalUtils.Nullable<IUserInfoProps>) {
      this.userInfo = info ?? null;
    },
  },
});

export default useUserStore;
