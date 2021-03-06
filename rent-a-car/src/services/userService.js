
const userService = {
  register: function (data) {
    return fetch(`http://localhost:8080/api/user/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json());
  },

  login: function (data) {
    return fetch(`http://localhost:8080/api/user/login`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.status === 200 ? res.json() : res.text());
  },

  logout: function () {
    return fetch(`http://localhost:8080/api/user/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.text());
  }

};

export default userService;