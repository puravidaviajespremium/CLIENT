import { useState } from "react";
import styles from "./Contact.module.css";
import {
  BsFacebook,
  BsInstagram,
  BsFillEnvelopeFill,
  BsHeadset,
  BsFillExclamationCircleFill
} from "react-icons/bs";
import validate from "./validate.js";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    comment: "",
  })

  //Capturar datos
  const handleChange = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    setForm({...form, [property]:value});
    validate({...form, [property]:value}, property, setErrors, errors);
  }

  //Deshabilitar botón
  const btnDisabled = () =>{
    let disabledAux = true;
    for(let error in errors){
      if(errors[error] ===""){
        disabledAux = false
      }else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }

  //Enviar datos
  const handleSubmit = (event) => {
     event.preventDefault();
     setForm({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        comment: "",
     })
  }

  return (
    <section>
      <div className={styles.contactBanner}>
        <h1 className={styles.titleBanner}>Contacto</h1>
        <div className={styles.containerInfo}>
          <div className={styles.contactInfo}>
            <BsFillEnvelopeFill className={styles.icon} />
            <div className={styles.info}>
              <h4>Correo Electrónico</h4>
              <p>info@viajespuravidapremium.com</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <BsHeadset className={styles.icon} />
            <div className={styles.info}>
              <h4>Teléfono</h4>
              <p>+506 6218 2218</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.social}>
              <a href="https://www.facebook.com/PuraVidaPremiumTravelExperience/">
                <BsFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com/puravidapremiumtravelxperience?igshid=MWZjMTM2ODFkZg==">
                <BsInstagram className={styles.icon} />
              </a>
            </div>
            <div className={styles.info}>
              <h4>Redes Sociales</h4>
              <p>Visítanos</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.containerform}>
          <h1 className={styles.titleForm}>Contáctanos</h1>
          <p>
            Nuestros operadores te brindarán toda la información sobre tu futuro
            viaje.
          </p>
          <form action="" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.containerInputs}>
                <div className={styles.contentInput}>
                    {/* <label htmlFor="name" className={styles.label}>Nombres:</label> */}
                    <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                    placeholder="Nombres"
                    />
                    {errors.firstName && <span className={styles.error}><BsFillExclamationCircleFill/>{errors.firstName}</span>}
                </div>
                <div className={styles.contentInput}>
                    {/* <label htmlFor="name" className={styles.label}>Nombres:</label> */}
                    <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                    placeholder="Apellidos"
                    />
                    {errors.lastName && <span className={styles.error}><BsFillExclamationCircleFill/>{errors.lastName}</span>}
                </div>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.contentInput}>
                    <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    placeholder="Email"
                    />
                    {errors.email && <span className={styles.error}><BsFillExclamationCircleFill/>{errors.email}</span>}
                </div>
                <div className={styles.contentInput}>
                    <input
                    type="text"
                    name="telephone"
                    onChange={handleChange}
                    value={form.telephone}
                    placeholder="Celular"
                    />
                    {errors.telephone && <span className={styles.error}><BsFillExclamationCircleFill/>{errors.telephone}</span>}
                </div>
            </div>
            <div className={styles.contentInput}>
                <textarea
                name="comment"
                onChange={handleChange}
                value={form.comment}
                cols="30"
                rows="10"
                placeholder="Comentario"
                ></textarea>
            </div>
            <button className={`${styles.btnSubmit} btn btnPrimary`} disabled={
                btnDisabled() ||
                  !form.firstName ||
                  !form.lastName ||
                  !form.email ||
                  !form.telephone}>
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
