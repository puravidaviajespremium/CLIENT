
import Header from "../../components/Header/Header";
import styles from "./Home.module.css"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <h2>Body</h2>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home;