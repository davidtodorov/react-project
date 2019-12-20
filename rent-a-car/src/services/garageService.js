import axios from 'axios';
const transport = axios.create({
  withCredentials: true
})
const garageService = {
  get: function () {
    return transport.get(`http://localhost:8080/api/car/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.data;
      })
  },
  add: function (data) {
    return transport.post(`http://localhost:8080/api/car/add`, { ...data })
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.json();
      })
  },
};

export default garageService;