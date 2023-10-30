import React from "react";
import { Link } from "react-router-dom";
import {
  BsFilePersonFill,
  BsFillBagCheckFill,
  BsFillAlarmFill,
  BsCash,
} from "react-icons/bs";
import styles from "./StepsBanner.module.css";

const StepsBanner = () => {
  return (
    <div className={styles.containerComponent}>
      <h1>Cómo funciona la experiencia de Pura Vida Viajes?</h1>

      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <BsFilePersonFill className={styles.icon} />
          <h2>Paso 1: Ingrese sus datos</h2>
          <p>
            Necesitaremos su nombre completo, correo electrónico, teléfono y
            destino de interés para comenzar la asesoria
          </p>
        </div>

        <div className={styles.step}>
          <BsFillBagCheckFill className={styles.icon} />
          <h2>Paso 2: Pago del experto nativo</h2>
          <p>
            Se le asignará un experto que se encargará de todo el proceso de
            asesoramiento para su viaje personalizado
          </p>
        </div>

        <div className={styles.step}>
          <BsFillAlarmFill className={styles.icon} />
          <h2>Paso 3: Sesión de asesoria</h2>
          <p>
            Asesoria y planificación de su viaje con nuestro experto nativo{" "}
          </p>
        </div>

        <div className={styles.step}>
          <BsCash className={styles.icon} />
          <h2>Paso 4: Envío de presupuesto</h2>
          <p>
            Recibirá un presupuesto detallado con todos los servicios incluidos
            y el precio final{" "}
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          PD: Despúes del paso 1, podrá aclarar todas sus dudas cuando sea
          contactado por nuestros colaboradores.
        </p>
        <Link to={`/contacto`}>
          <button className={`${styles.btnPrimary} btn btnPrimary`}>
            QUIERO COMENZAR MI VIAJE PERSONALIZADO
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StepsBanner;
