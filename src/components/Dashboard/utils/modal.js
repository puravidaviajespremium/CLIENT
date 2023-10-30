
import Swal from 'sweetalert2';

export const modal = (title,text, icon) => {
    Swal.fire({
        title,
        text,
        icon,
        showConfirmButton: false,
        showCloseButton: true,
    })
}