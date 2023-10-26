import axios from 'axios';
const apiUrl = "http://localhost:3001"

const customDataProvider = {
  getList: (resource, params) => {
    if (resource === "/users") {
      return axios.get(`${apiUrl}${resource}`)
        .then(response => ({
          data: response.data,
          total: response.data.length, // Esto puede variar según tu backend
        }));
    }
  },
  create: (resource, params) => {
    const { data } = params;
    if (resource === "/users") {
      return axios.post(`${apiUrl}${resource}/create`, data)
        .then(response => ({
          data: response.data,
        }));
    }
  },
  getOne: (resource, params) => {
    if (resource === "/users") {
      return axios.get(`${apiUrl}${resource}/${params.id}`)
        .then(response => {
          console.log("Respuesta del servidor:", response.data);
          console.log("Respuesta estructurada:", { data: response.data });
          return { data: response.data }
        });
    }
  },
  update: (resource, params) => {
    const { data } = params;
    if (resource === "/users") {
      return axios.put(`${apiUrl}${resource}/update/${params.id}`, data)
        .then(response => {
          console.log("Respuesta del servidor:", response.data);
          return { data: response.data };
        })
    }
  },
};

export default customDataProvider;