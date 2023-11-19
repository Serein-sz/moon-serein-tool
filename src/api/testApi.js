import { postApi } from '../utils/request';

class Login {
  login(username) {
    const data = { username };
    return postApi({ url: '/login', data });
  }
}

export const login = new Login();
