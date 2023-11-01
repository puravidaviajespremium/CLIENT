import { useState} from "react";
import {
  BsFillExclamationCircleFill, 
  BsFillInfoCircleFill,
  BsFacebook,
  BsInstagram,
  BsFillEnvelopeFill,
  BsHeadset} from "react-icons/bs";
import validate from "./validate.js";
import { addClient } from "../../redux/actions/clientsActions";
import { useDispatch, useSelector } from "react-redux";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import styles from "./FormContact.module.css";

const FormContact = () => {
  const countries = useSelector(state => state.countries.countries);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryOrigin: "",
    telephone: "",
    destinationCountry:"",
    comment: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryOrigin: "",
    telephone: ""
  });

  //Capturar datos
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, property, setErrors, errors);
  };

  const handleChangeCountryOrigin = (value, countryData) => {
    setForm({...form, countryOrigin: countryData.name, telephone:value})
    validate({ ...form, telephone: value }, "telephone", setErrors, errors);
  };

  //Deshabilitar botón
  const btnDisabled = () => {
    let disabledAux = true;
    for (let error in errors) {
      if (errors[error] === "") {
        disabledAux = false;
      } else {
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  };

  //Enviar datos
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addClient(form));
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      countryOrigin: "",
      telephone: "",
      destinationCountry:"",
      comment: "",
    });

  };
  return (
    <div className={styles.contactContainer}>
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
      <div className={styles.containerform}>
        <h1 className={styles.titleForm}>Contáctanos</h1>
        <p>
          Nuestros operadores te brindarán toda la información sobre tu futuro
          viaje.
        </p>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.containerInputs}>
            <div className={styles.contentInput}>
              <div className={styles.inputLabel}>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                />
                <label
                  htmlFor="firstName"
                  className={`${styles.label} ${
                    form.firstName && styles.efectoLabel
                  }`}
                >
                  Nombres:
                </label>
              </div>
              {errors.firstName && (
                <span className={styles.error}>
                  <BsFillExclamationCircleFill />
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className={styles.contentInput}>
              <div className={styles.inputLabel}>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                />
                <label
                  htmlFor="lastName"
                  className={`${styles.label} ${
                    form.lastName && styles.efectoLabel
                  }`}
                >
                  Apellidos:
                </label>
              </div>
              {errors.lastName && (
                <span className={styles.error}>
                  <BsFillExclamationCircleFill />
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
          <div className={styles.containerInputs}>
            <div className={styles.contentInput}>
              <div className={styles.inputLabel}>
                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
                <label
                  htmlFor="email"
                  className={`${styles.label} ${
                    form.email && styles.efectoLabel
                  }`}
                >
                  Correo electrónico:
                </label>
              </div>
              {errors.email && (
                <span className={styles.error}>
                  <BsFillExclamationCircleFill />
                  {errors.email}
                </span>
              )}
            </div>
            <div className={styles.contentInput}>
              <div className={styles.inputLabel}>
                <PhoneInput
                  country={'cr'}
                  onChange={handleChangeCountryOrigin}
                  inputClass={styles.phoneInput}
                  placeholder=""
                  value={form.telephone}
                />
                <label
                    htmlFor="telephone"
                    className={`${styles.label} ${styles.labelPhone}`}
                  >
                    Celular:
                  </label>
              </div>
              {errors.telephone && (
                  <span className={styles.error}>
                    <BsFillExclamationCircleFill />
                    {errors.telephone}
                  </span>
                )}
            </div>
          </div>
          <div className={styles.containerInputs}>
          <div className={styles.contentInput}>
            <span className={styles.information}> <BsFillInfoCircleFill/>¿Ya sabes que país quieres visitar? Selecciónalo</span>
          </div>
            <div className={styles.contentInput}>
              <select 
                name="destinationCountry"
                onChange={handleChange}
                defaultValue="destino">
                <option value="destino" disabled>Pais de destino</option>
                {
                  countries?.map(country => (
                    <option key={country.id} value={country.name}>{country.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className={styles.contentInput}>
            <div className={styles.inputLabel}>
              <textarea
                id="comment"
                name="comment"
                onChange={handleChange}
                value={form.comment}
                cols="30"
                rows="10"
              ></textarea>
              <label
                htmlFor="comment"
                className={`${styles.label} ${
                  form.comment && styles.efectoLabel
                }`}
              >
                Comentario:
              </label>
            </div>
          </div>
          <button
            className={`${styles.btnSubmit} btn btnPrimary`}
            disabled={
              btnDisabled() ||
              !form.firstName ||
              !form.lastName ||
              !form.email ||
              !form.countryOrigin||
              !form.telephone
            }
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
