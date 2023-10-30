import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/countriesActions';
import ReactPaginate from 'react-paginate';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import FormContact from '../../components/FormContact/FormContact';
import Encabezado from '../../components/Encabezado/Encabezado';
import CountryCard from '../../components/CountryCard/CountryCard';
import styles from './Destinations.module.css';
import Slider from '../../components/Slider/Slider';
import { animateScroll as scroll} from 'react-scroll';


const Destinations = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector(state => state.countries);

  const [currentPage, setCurrentPage] = useState(0);
  const countriesPerPage = 6;

  useEffect(() => {
    dispatch(getAllCountries());
    scroll.scrollToTop()
  }, []);

  const pageCount = Math.ceil(countries?.length / countriesPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    localStorage.setItem("currentPage", selectedPage.selected.toString());
  };

  const startIndex = currentPage * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  const countriesPage = countries?.slice(startIndex, endIndex);

  console.log(window.location)

  return (
    <>
      <Slider />

      <div className={`${styles.container} container`}>
        <Encabezado title="Destinos" subtitle="Explore todos nuestros destinos o contacte a un experto por más lugares" />
        <div className={`${styles.containerCard}`}>

          {countriesPage?.map((country) => {
            return <CountryCard id={country.id} key={country.id} name={country.name} image={country.image} />
          })}
        </div>
      </div>

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        initialPage={parseInt(localStorage.getItem("currentPage")) || 0}
        containerClassName={styles.pagination}
        activeLinkClassName={styles.activePage}
        previousLabel={<BsFillArrowLeftCircleFill style={{ color: "var(--secondary-color)" }} />}
        nextLabel={<BsFillArrowRightCircleFill style={{ color: "var(--secondary-color)" }} />}
        previousClassName={currentPage === 0 ? styles.disabled : ''}
        nextClassName={currentPage === pageCount - 1 ? styles.disabled : ''}
      />
<FormContact />
    </>
  );
};

export default Destinations;