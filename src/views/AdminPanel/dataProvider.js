import axios from 'axios';
const apiUrl = "http://localhost:3001"

const customDataProvider = {
  getList: (resource, params) => {
    if (resource === "/users") {
      const { filter } = params;
      const { firstName } = filter;

      const url = `${apiUrl}${resource}`;
      const queryParams = {};
      
      if (firstName) {
        queryParams.firstName = firstName;
      }

      return axios.get(url, { params: queryParams })
        .then((response) => {
          return {
            data: response.data,
            total: response.data.length,
          };
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
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