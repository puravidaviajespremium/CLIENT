import {
  BsFacebook,
  BsInstagram,
  BsFillEnvelopeFill,
  BsHeadset
} from "react-icons/bs";
import FormContact from "../../components/FormContact/FormContact";
import styles from "./Contact.module.css"

const Contact = () => {

  return (
    <section>
      <div className={styles.contactBanner}>
        <h1 className={styles.titleBanner}>Contacto</h1>
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
      </div>
      <FormContact/>
    </section>
  );
};

export default Contact;
