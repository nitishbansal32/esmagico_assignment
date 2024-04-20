import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.heading_container}>
        <span className={styles.heading}>
          {" "}
          <b>Don’t let </b> tech <br /> become a barrier
        </span>

        <span className={styles.sub_heading}>
          We leverage AI as an enabler, building advanced tech that brings your
          <br /> ideas to life.
        </span>
      </div>
    </div>
  );
};

export default Hero;
