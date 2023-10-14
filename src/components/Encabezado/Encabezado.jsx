import styles from './Encabezado.module.css';

const Encabezado = ({title, subtitle}) =>{
    return (
        <div className={styles.containerEncabezado}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.line}></span>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default Encabezado;