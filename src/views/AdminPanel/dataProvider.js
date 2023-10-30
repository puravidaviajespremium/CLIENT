import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

const customDataProvider = {
  getList: async (resource, params) => {
    const { filter } = params;
    const { firstName, country, userStatus, membershipStatus, contactStatus, continent } = filter;

    let url = `${apiUrl}/${resource}`;
    const queryParams = {};

    if (firstName) {
        queryParams.firstName = firstName;
    }

    if (country) {
        queryParams.country = country;
    }

    if (userStatus) {
      queryParams.userStatus = userStatus;
      url = `${apiUrl}/${resource}/filter/userStatus/${userStatus}`;
    }

    if (membershipStatus) {
      queryParams.membershipStatus = membershipStatus;
      url = `${apiUrl}/${resource}/filter/membershipStatus/${membershipStatus}`;
    }

    if (contactStatus) {
      queryParams.contactStatus = contactStatus;
      url = `${apiUrl}/${resource}/filter/contactStatus/${contactStatus}`;
    }

    if (continent) {
      queryParams.continent = continent;
      url = `${apiUrl}/${resource}/filter/continent/${continent}`;
    }

    try {
      const response = await axios.get(url, { params: queryParams })
      return {
        data: response.data,
        total: response.data.length
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      throw error;
    }
  },
  
  create: async (resource, params) => {
    const { data } = params;
    try {
      const response = await axios.post(`${apiUrl}/${resource}/create`, data)
      return {data: response.data}
    } catch (error) {
      console.error("Error en la solicitud:", error.response.data.error);
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await axios.get(`${apiUrl}/${resource}/${params.id}`)
      return { data: response.data }
    } catch (error) {
      console.error("Error en la solicitud:", error.response.data.error);
    }
  },  

  getMany: async (resource, params) => {
    try {
      const response = await axios.get(`${apiUrl}/${resource}`);
      return { data: response.data }
    } catch (error) {
      console.error("Error en la solicitud:", error.response.data.error);
    }
  },  
  
  update: async (resource, params) => {
    const { data } = params;
    try {
      if (resource === "users") {
        const response = await axios.put(`${apiUrl}/${resource}/update/${params.id}`, data);
        return { data: response.data };
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.response.data.error);
    }
  },
  
  delete: async (resource, params) => {
    const { id } = params;
    const response = await axios.delete(`${apiUrl}/${resource}/delete/${id}`)
    return {
      data: response.data
    }
  },
  
  deleteMany: async (resource, params) => {
    const query = `filter=${JSON.stringify({ id: params.ids })}`;
    const response = await axios.delete(`${apiUrl}/${resource}/deleteMany?${query}`);
    return {
      data: [response.data]
    };
  },
};

export default customDataProvider;