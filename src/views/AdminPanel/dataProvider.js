import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

const customDataProvider = {
  getList: (resource, params) => {
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


    return axios.get(url, { params: queryParams })
        .then((response) => {
            return {
                data: response.data,
                total: response.data.length,
            };
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
            throw error;
        });
},
  
  create: (resource, params) => {
    const { data } = params;
    return axios.post(`${apiUrl}/${resource}/create`, data)
      .then(response => ({
        data: response.data,
      }));
  },

  getOne: (resource, params) => {
    if (resource === "users") {
      return axios.get(`${apiUrl}/${resource}/${params.id}`)
        .then(response => {
          console.log("Respuesta del servidor:", response.data);
          console.log("Respuesta estructurada:", { data: response.data });
          return { data: response.data }
        });
    }
  },
  
  update: (resource, params) => {
    const { data } = params;
    if (resource === "users") {
      return axios.put(`${apiUrl}/${resource}/update/${params.id}`, data)
        .then(response => {
          console.log("Respuesta del servidor:", response.data);
          return { data: response.data };
        })
    }
  },
  
  delete: async (resource, params) => {
    const { id } = params;
    const response = await axios.delete(`${apiUrl}${resource}/delete/${id}`)
    return {
      data: response.data
    }
  },
  
  deleteMany: async (resource, params) => {
    const query = `filter=${JSON.stringify({ id: params.ids })}`;
    const response = await axios.delete(`${apiUrl}${resource}/deleteMany?${query}`);
    return {
      data: [response.data]
    };
  },
};

export default customDataProvider;