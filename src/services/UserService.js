import api from '../http';

export default class AuthService {
  static fetchUsers() {
    return api
      .get('/users')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('Ошибка при получении пользователей:', error);
        throw error;
      });
  }
}
