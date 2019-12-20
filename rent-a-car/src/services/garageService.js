import axios from 'axios';
const transport = axios.create({
  withCredentials: true
})
const garageService = {
  get: function () {
    debugger;
    return transport.get(`http://localhost:8080/api/car/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.data;
      })
  },
  add: function (data) {
    debugger;
    return transport.post(`http://localhost:8080/api/car/add`, { ...data })
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.json();
      })
  },
};

export default garageService;