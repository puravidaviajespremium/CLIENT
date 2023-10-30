import Swal from "sweetalert2";

export const modalSuccess = () => {
  Swal.fire({
    title: "Datos registrados",
    html: `<div class="modalExpert">
                    <span>Pronto nos pondremos en contacto contigo.</span> 
                    <hr>
                    <div class="sectionExpert">
                        <span>Si quieres tener una asesoría personalizada puedes contratar un experto por tan solo USD20.</span>
                        <a href="/payment" class="btn btnPrimary">CONTRATAR</a>
                    </div>
                </div>`,
    icon: "success",
    showConfirmButton: false,
    showCloseButton: true,
  });
};

export const modalError = (error = "") => {
  Swal.fire({
    title: "Lo sentimos",
    text: `${error}`,
    icon: "error",
    confirmButtonText: "Cerrar",
  });
};
