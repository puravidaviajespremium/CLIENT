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
  delete: (resource, params) => {
    const { id } = params;
    if (resource === "/users") {
      return axios.delete(`${apiUrl}${resource}/delete/${id}`)
        .then(response => ({
          data: response.data
        }))
    }
  }
};

export default customDataProvider;