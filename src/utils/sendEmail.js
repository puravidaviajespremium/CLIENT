import axios from "axios";

export const sendEmail = async ({email, firstName, lastName}) => {
    const info = {
        gmail: email, 
        name: `${firstName} ${lastName}`
    }

    try {
        await axios.post('http://localhost:3001/nodemailer/', info);
    } catch (error) {
        console.log(error.message);
    }
}