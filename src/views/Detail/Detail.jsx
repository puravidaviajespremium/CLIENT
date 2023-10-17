import styles from "./Detail.module.css";
import { BsFillGeoAltFill } from "react-icons/bs";
import Encabezado from "../../components/Encabezado/Encabezado";
import { useParams } from "react-router-dom";
import { getCountryById, cleanCountryDetail } from "../../redux/actions/countriesActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const countryId = useSelector((state) => state.countries.detail);

  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(cleanCountryDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={styles.divDetail}>
      <div className={styles.divInicio}>
        <img
          className={styles.imagenPais}
          src={countryId?.image}
          alt={countryId?.name}
        />
        <div className={styles.divDescription}>
          <div className={styles.divText}>
            <h2>
              {" "}
              <BsFillGeoAltFill /> {countryId?.name}
            </h2>
            <p>{countryId?.description}</p>
            <p>
              <b>Experiencias:</b> {countryId?.experiences}{" "}
            </p>
          </div>

          <div className={styles.divButton}>
            <Link to={`/contacto`}>
              <button className={`${styles.buttonDetail} btnPrimary btn`}>
                CONTACTO
              </button>
            </Link>
            <Link to="">
              <button className={`${styles.buttonDetail} btnPrimary btn`}>
                EXPERTO
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.Experiencies} container`}>
        <Encabezado
          title="Destinos más populares"
          subtitle="Explora una forma diferente de viajar"
        />

        <div className={styles.divExperiencies}>
          {countryId?.Destinies?.map((destino, index) => (
            <div key={index} className={styles.divImageDescription}>
              <img
                className={styles.imageExperiencia}
                src={destino.image}
                alt={destino.name}
              />
              <div className={styles.textDescription}>
                <h4>{destino.name.toUpperCase()}</h4>
                <p>{destino.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
