import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div>
            <div>
                <NavBar />
                <h1>Comience su viaje con nosotros.</h1>
                <p>Destinos de Ensueño. Experiencias inolvidables...</p>
            </div>
            <div>
                <h2>Body</h2>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;