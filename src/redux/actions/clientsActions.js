import axios from "axios";
import { postClient, getClients } from "../slices/clientsSlices";
import { sendEmail } from "../../utils/sendEmail";
import { modalSuccess, modalError } from "../../utils/modalResults";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const addClient = (client) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${apiUrl}/clients/create`, client);
    dispatch(postClient(data));
    modalSuccess();
    sendEmail(client);
  } catch (error) {
    modalError(error.response.data.error || error.message);
  }
};

export const getAllClients = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}/clients`);
    dispatch(getClients(data));
  } catch (error) {
    console.log(error);
  }
};
