import styles from "./Faqs.module.css";
import sections from "./FaqsList";
import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsFillPatchQuestionFill,
} from "react-icons/bs";
import { animateScroll as scroll} from 'react-scroll';
import { useEffect } from "react";

const Faqs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    if (activeSection === sectionIndex) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionIndex);
    }
  };

  useEffect(() => {
    scroll.scrollToTop()
  }, []);

  return (
<>
  <div className={styles.faqsBanner}>
    <h1 className={styles.titleBanner}>Preguntas Frecuentes</h1>
  </div>
    <div className={styles.container}>
        {sections.map((section, index) => (
          <div key={index} className={styles.faqSection}>
            <h3 onClick={() => toggleSection(index)}>
              {section.title}
              {activeSection === index ? (
                <BsFillArrowUpCircleFill className={styles.icon} />
              ) : (
                <BsFillArrowDownCircleFill className={styles.icon} />
              )}
            </h3>
            {activeSection === index && (
              <ul>
                {section.questions.map((qAndA, qIndex) => (
                  <li key={qIndex}>
                    <strong>
                      <BsFillPatchQuestionFill className={styles.iconTwo} />{" "}
                      {qAndA.question}
                    </strong>
                    <p>{qAndA.answer}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
    </>
  );
};

export default Faqs;
