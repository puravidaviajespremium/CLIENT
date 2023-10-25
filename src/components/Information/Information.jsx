import styles from './Information.module.css'
import Encabezado from '../Encabezado/Encabezado.jsx'
import {BsFillPencilFill, BsPuzzleFill, BsFillKeyFill} from "react-icons/bs"

const Information = () => {
    return (
        <>
            <div className={styles.divInformation}>
                <div className={styles.divContenido}>
                    <Encabezado
                        title="Lo que nos impulsa..."
                        subtitle="Descubra lo que realmente nos mueve y cómo estos valores se reflejan en cada aspecto de nuestro trabajo diario."
                    />
                    <div className={styles.divValues}>
                        <div className={styles.values}>
                            <BsFillKeyFill size={'25'}/>
                            <h3>SEGURIDAD</h3>
                            <p>Ofrecemos la posibilidad de gestionar un fideicomiso estatal para que su dinero queda resguardado.</p>
                        </div>

                        <div className={styles.values}>
                            <BsPuzzleFill size={'20'}/>   
                            <h3>FLEXIBILIDAD</h3>
                            <p> Para su tranquilidad no cobramos multas si deja de pagar y su dinero nunca se pierde , puede mandar a alguien mas.</p>
                        </div>

                        <div className={styles.values}>
                            <BsFillPencilFill size={'20'}/>
                            <h3>PERSONALIZACIÓN</h3>
                            <p>Planificamos un viaje a su medida, donde lo que nos impulsa es el deseo de que tenga la mejor experiencia túristica de su vida.</p>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Information;

