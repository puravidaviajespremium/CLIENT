import FormContact from "../../components/FormContact/FormContact";
import styles from "./Contact.module.css"

const Contact = () => {

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
