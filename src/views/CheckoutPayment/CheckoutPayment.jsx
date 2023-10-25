import PaypalCheckoutButton from "../../components/PaypalCheckoutButton/PaypalCheckoutButton";
import { BsCheck, BsPerson, BsHeart, BsStar  } from 'react-icons/bs';
import styles from "./CheckoutPayment.module.css"

const CheckoutPayment = () => {
    return (
        <div className={styles.checkPaymentSection}>
            <div className={styles.expertHeader}>
                <div className={`${styles.expertText} container`}>
                    <h2>¿Necesitas la ayuda de un experto?</h2>
                    <div className={styles.expertHeaderTextP}>
                        <p>
                            Encontrar la experiencia perfecta para tu destinos puede ser un proceso complicado, pero estamos aquí para facilitarte el camino. Nuestros expertos altamente calificados están listos para brindarte su conocimiento y experiencia.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${styles.expertBody} ${styles.expertText} container`}>

                <div className={`${styles.expertBodyLeft} ${styles.expertText}`}>
                    <h2>
                        ¿Por qué elegir a nuestros expertos?
                    </h2>

                    <div className={styles.expertListCont}>
                        <div className={styles.expertList}>
                            <ul>
                                <li>
                                    <span>
                                        <BsCheck />
                                    </span>
                                    <div className={styles.expertListText}>
                                        Experiencia probada en su campo.
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <BsPerson />
                                    </span>
                                    <div className={styles.expertListText}>
                                        Respuestas adaptadas a tus necesidades específicas.
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <BsHeart />
                                    </span>
                                    <div className={styles.expertListText}>
                                        Un profundo entendimiento de tus deseos y necesidades durante tu viaje.
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <BsStar />
                                    </span>
                                    <div className={styles.expertListText}>
                                        Compromiso con la excelencia y la satisfacción del cliente.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={styles.expertBodyRight}>
                    <div className={styles.expertBodyRightText}>
                        <p>
                            No importa cuál sea tu destino, nuestros expertos están aquí para proporcionarte soluciones efectivas y ayudarte a alcanzar tus mejores experiencias. Contratar a un experto es una inversión en ti mismo y en el éxito de tus expectativas.
                        </p>
                        <p>
                            ¿Listo para dar el siguiente paso? Contacta a uno de nuestros expertos hoy y descubre cómo pueden marcar la diferencia.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${styles.expertBodyBtn} ${styles.expertText}`}>
                <PaypalCheckoutButton
                    text={
                        <span>
                            Contactanos para obtener tu asesoría por solo $20
                            <br />
                            ¡Oferta limitada!
                        </span>
                    }
                />
            </div>
        </div>
    );
};

export default CheckoutPayment;

