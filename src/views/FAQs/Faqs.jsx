import styles from "./Faqs.module.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import sections from "./FaqsList";

import { useState } from "react";

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";


const Faqs = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionIndex) => {
        if (activeSection === sectionIndex) {
            setActiveSection(null);
        } else {
            setActiveSection(sectionIndex);
        }
    };

    

    return (
        <>
            <NavBar />
<div className={styles.container}>


            {sections.map((section, index) => (
                <div key={index} className={styles.faqSection}>
                    <h3 onClick={() => toggleSection(index)}>
                        {section.title}
                        {activeSection === index ? (
                            <BsFillArrowUpCircleFill className={styles.icon} />
                        ) : (
                            < BsFillArrowDownCircleFill className={styles.icon} />
                        )}
                    </h3>
                    {activeSection === index && (
                        <ul>
                            {section.questions.map((qAndA, qIndex) => (
                                <li key={qIndex}>
                                    <strong>{qAndA.question}</strong>
                                    <p>{qAndA.answer}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
</div>
            <Footer />
        </>
    );
};

export default Faqs;