import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;

export const sendEmail = async ({email, firstName, lastName}) => {
    const info = {
        gmail: email, 
        name: `${firstName} ${lastName}`
    }

    try {
        await axios.post(`${apiUrl}/nodemailer/`, info);
    } catch (error) {
        console.log(error.message);
    }
}