import FormContact from "../../components/FormContact/FormContact";
import styles from "./Contact.module.css"
import { animateScroll as scroll} from 'react-scroll';
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    scroll.scrollToTop()
  }, []);

  return (
    <section>
      <div className={styles.contactBanner}>
        <h1 className={styles.titleBanner}>Contacto</h1>
      </div>
      <FormContact/>
    </section>
  );
};

export default Contact;
