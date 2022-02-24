interface Login {
  user: string;
  password: string;
}

export function login(param: Login): Promise<Login> {
  return new Promise((resolve) => {
    resolve(param);
  });
}
