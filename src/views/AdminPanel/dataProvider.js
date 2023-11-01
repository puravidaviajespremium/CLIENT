import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

const customDataProvider = {
  getList: async (resource, params) => {
    const { filter, pagination } = params;
    const { firstName, country, userStatus, membershipStatus, contactStatus, continent, UserId } = filter;
    const { page, perPage } = pagination

    const queryParams = {};
    queryParams.page = page;
    queryParams.perPage = perPage;
    
    let url = `${apiUrl}/${resource}`;    
    
    if(resource === 'clients') {
      if (membershipStatus || contactStatus || UserId || firstName ) {
        queryParams.membershipStatus = membershipStatus;
        queryParams.contactStatus = contactStatus;
        queryParams.UserId = UserId;
        queryParams.firstName = firstName;
        url = `${apiUrl}/${resource}/bycoll`;
      }

    } else {

      if (firstName) {
        queryParams.firstName = firstName;
      }
      
  
      if (country) {
          queryParams.country = country;
      }
  
      if (userStatus) {
        queryParams.userStatus = userStatus;
        url = `${apiUrl}/${resource}/filter/userStatus`;
      }
      
      if (continent) {
        queryParams.continent = continent;
        url = `${apiUrl}/${resource}/filter/continent`;
      }
    }
    
    try {
      const response = await axios.get(url, { params: queryParams })
      return {
        data: response.data[resource],
        total: response.data.total,
        pageInfo: response.data.pageInfo
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
    let url;
    if (resource === 'countries') {
        url = `${apiUrl}/${resource}/country/${params.id}`;
    } else {
        url = `${apiUrl}/${resource}/${params.id}`;
    }
      const response = await axios.get(url)
      console.log("API Response: ", response.data);
      return { data: response.data }
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
  const url = `${apiUrl}/${resource}/update/${params.id}`;
  console.log("Complete URL:", url);
  console.log("Payload:", data);
    try {
      const response = await axios.put(url, data);
      console.log("Axios Response:", response);
      return response.data;
    } catch (error) {
      console.log("Axios Error:", error);
      throw error;
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