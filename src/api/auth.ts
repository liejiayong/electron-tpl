import to from 'await-to-js';

export async function login(param: IUserForm) {
  const p: Promise<IUserForm> = new Promise((resolve, reject) => {
    if (param) {
      resolve(param);
    }

    reject('Login error');
  });
  return to<IUserForm>(p);
}
