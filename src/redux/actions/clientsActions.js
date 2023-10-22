import axios from 'axios';
import { postClient } from '../slices/clientsSlices';
import { sendEmail } from '../../utils/sendEmail';
import { modalSuccess, modalError } from '../../utils/modalResults';

const URL_BASE = 'http://localhost:3001/clients';

export const addClient = (client) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${URL_BASE}/create`, client);
        dispatch(postClient(data));
        Swal.fire({
            title:"Datos registrados",
            html: `<div class="modalExpert">
                        <span>Pronto nos pondremos en contacto contigo.</span> 
                        <hr>
                        <div class="sectionExpert">
                            <span>Si quieres tener una asesoría personalizada puedes contratar un experto por tan solo 20u$.</span>
                            <a href="/payment" class="btn btnPrimary">CONTACTAR</a>
                        </div>
                    </div>`,
            icon: "success",
            showConfirmButton: false,
            showCloseButton: true,
        })
        modalSuccess();
        sendEmail(client);
    } catch (error) {
        modalError();
    }
}