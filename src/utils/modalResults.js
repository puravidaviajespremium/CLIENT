import Swal from 'sweetalert2';

export const modalSuccess = () => {
    Swal.fire({
        title:"Datos registrados",
        html: `<div class="modalExpert">
                    <span>Pronto nos pondremos en contacto contigo.</span> 
                    <hr>
                    <div class="sectionExpert">
                        <span>Si quieres tener una asesoría personalizada puedes contratar un experto por tan solo 20u$.</span>
                        <a href="#" class="btn btnPrimary">CONTACTAR</a>
                    </div>
                </div>`,
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
    })
}

export const modalError = () =>{
    Swal.fire({
        title:"Lo sentimos",
        text: "No pudimos cargar los datos, inténtalo mas tarde.",
        icon: "error",
        confirmButtonText: 'Cerrar'
    })
}