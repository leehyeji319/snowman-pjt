import axios from 'axios';

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return axios.create({
      headers: { Authorization: 'Bearer ' + user.accessToken }
    })
  } else {
    return {};
  }
}
