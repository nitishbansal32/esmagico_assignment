import styles from "./About.module.css";
import About_img1 from "../../assets/about_img1.svg";
import About_img2 from "../../assets/about_img2.svg";

const AboutCards = () => {
  return (
    <div className={styles.aboutCards_main_container}>
      <div className={styles.about_cards_upper_container}>
        <span className={styles.top_heading}>02.For Enterprises</span>
        <div className={styles.top_image_container}>
          <img src={About_img1} alt="" />
          <img src={About_img2} alt="" />
        </div>
      </div>
      <div className={styles.about_cards_bottom_container}>
        <span className={styles.bottom_heading}>01.For Enterprises</span>
      </div>
    </div>
  );
};

export default AboutCards;
