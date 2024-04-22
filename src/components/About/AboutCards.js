import styles from "./About.module.css";
import About_img1 from "../../assets/about_img1.svg";
import About_img2 from "../../assets/about_img2.svg";
import { useState, useEffect } from "react";

const AboutCards = () => {
  const [compState, setCompState] = useState(true);
  const [textState, setTextState] = useState(true);

  const CardIntitalInfo = (
    <div
      className={
        !compState
          ? styles.no_content_parent_img
          : styles.show_content_parent_img
      }
    >
      <span className={styles.top_heading}>02.For Enterprises</span>
      <div className={styles.top_image_container}>
        <img src={About_img1} alt="" />
        <img src={About_img2} alt="" />
      </div>
    </div>
  );

  const handleCompState = () => {
    setCompState(() => !compState);
  };

  useEffect(() => {
    if (compState === false) {
      const timer = setTimeout(() => {
        setTextState(() => !textState);
      }, 1500);
      return () => clearTimeout(timer);
    } else setTextState(false);
  }, [compState]);

  return (
    <div className={styles.aboutCards_main_container}>
      <div
        onClick={() => handleCompState()}
        className={styles.about_cards_upper_container}
      >
        {CardIntitalInfo}

        <div className={compState ? styles.no_content : styles.show_content}>
          <p className={textState ? styles.show_text : styles.no_text}>
            We implement Technologies to fuel your growth
          </p>
        </div>
      </div>
      <div className={styles.about_cards_bottom_container}>
        <span className={styles.bottom_heading}>01.For Enterprises</span>
      </div>
    </div>
  );
};

export default AboutCards;
