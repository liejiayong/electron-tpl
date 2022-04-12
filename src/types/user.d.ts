interface IUserForm {
  user: string;
  password: string;
}

interface IUserInfoProps {
  id: number;
  name: string;
  nickname: string;
  avatar: string;
  isAuth: boolean;
}

interface IUserStore {
  token: string | undefined;
  userInfo: GlobalUtils.Nullable<IUserInfoProps>;
}
