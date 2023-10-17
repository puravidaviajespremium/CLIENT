import { Link } from "react-router-dom";
import styles from "./Promocion.module.css";


const Promocion = () => {
  return (
    <div className={styles.divPromocion}>
      <div className={styles.divContenido}>
        <div className={styles.divTexto}>
            <h3>¡Prepárate para vivir las mejores vacaciones de tu vida!</h3>
            <h2>¿Estás listo para la aventura, la relajación y la diversión sin límites? </h2>
            <p>Contáctanos y déjanos llevar tus sueños de vacaciones a la realidad.</p>
            <Link to={`/contacto`}>
            <button className={`${styles.buttonContact} btnPrimary btn`}>
                CONTACTO
            </button>
            </Link>
        </div>
        <img className={styles.imgPromocion} src='https://evro.themescare.com/Ordan/assets/image/discount_single.png' alt="" />
      </div>
    </div>
  );
};

export default Promocion;
