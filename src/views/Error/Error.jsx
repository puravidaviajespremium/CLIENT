import { useEffect } from 'react';
import styles from './Error.module.css'

function Error({ setShowHeader, setShowFooter }) {

    useEffect(() => {
        setShowHeader(false);
        setShowFooter(false);

        return () => {
            setShowHeader(true);
            setShowFooter(true);
        };
    }, [setShowHeader, setShowFooter]);

    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorMessage}>
                <h1>404: Not Found</h1>
                <p>La página que estás buscando no se encuentra.</p>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default Error;
