import axios from 'axios';
const apiUrl = "http://localhost:3001/"

const customDataProvider = {
  getList: (resource, params) => {
    return axios.get(`${apiUrl}${resource}`)
      .then(response => ({
        data: response.data,
        total: response.data.length, // Esto puede variar según tu backend
      }));
  },
};

export default customDataProvider;