import axios from 'axios';
const apiUrl = "http://localhost:3001/"

const customDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const start = (page - 1) * perPage;
    const end = page * perPage - 1;

    return axios.get(`${apiUrl}${resource}`, {
      params: {
        _start: start,
        _end: end,
        _sort: params.sort.field,
        _order: params.sort.order,
      }
    })
    .then(response => ({
      data: response.data,
      total: parseInt(response.headers['x-total-count'], 10 || 0),
    }));
  },
};

export default customDataProvider;