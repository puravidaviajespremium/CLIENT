import { useState, useEffect } from "react"
import { BsExclamationCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import styles from "./PaymentCancel.module.css"

const PaymentCancel = () => {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(3);

    //Conteo regresivo
    useEffect(() => {
        const finalCountDown = setInterval(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1);
            } else {
                clearInterval(finalCountDown);
                navigate('/payment');
            }
        }, 1000);

        return () => clearInterval(finalCountDown);
    }, [countDown, navigate]);

    return (
        <div className={styles.cancelCont}>
            <div className={styles.fillNavBar}></div>
            <div className={`${styles.cancelTextCont} container`}>
                <div className={styles.cancelText}>
                    <span>
                        <BsExclamationCircle />
                    </span>
                    <h2>Pago cancelado</h2>
                    <p>Serás redirigido en <b>{countDown}</b> segundos...</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentCancel;