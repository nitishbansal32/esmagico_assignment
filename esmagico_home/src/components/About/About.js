import styles from "./About.module.css";
import LogoProps from "./LogoProps";
import brand_logo1 from "../../assets/brand_logo1.svg";
import brand_logo2 from "../../assets/brand_logo2.svg";
import brand_logo3 from "../../assets/brand_logo3.svg";
import brand_logo4 from "../../assets/brand_logo4.svg";
import brand_logo5 from "../../assets/brand_logo5.svg";
import brand_logo6 from "../../assets/brand_logo6.svg";
import brand_logo7 from "../../assets/brand_logo7.svg";
import brand_logo8 from "../../assets/brand_logo8.svg";
import brand_logo9 from "../../assets/brand_logo9.svg";
import brand_logo10 from "../../assets/brand_logo10.svg";
import brand_logo11 from "../../assets/brand_logo11.svg";
import brand_logo12 from "../../assets/brand_logo12.svg";

const About = () => {
  const logoProps_container_large = {
    width: "9.375em",
    height: "6.25em",
    background: "#F9F9F9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.625em",
  };
  const logoProps_container_small = {
    width: "5.625em",
    height: "3.75em",
    background: "#F9F9F9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.625em",
  };

  return (
    <div className={styles.main_container}>
      <h1>
        We have <span>built</span> for
      </h1>
      <div className={styles.about_logos_container}>
        <div>
          <LogoProps imgUrl={brand_logo1} style1={logoProps_container_large} />
          <LogoProps imgUrl={brand_logo2} style1={logoProps_container_large} />
          <LogoProps imgUrl={brand_logo3} style1={logoProps_container_large} />
          <LogoProps imgUrl={brand_logo4} style1={logoProps_container_large} />
          <LogoProps imgUrl={brand_logo5} style1={logoProps_container_large} />
          <LogoProps imgUrl={brand_logo6} style1={logoProps_container_large} />
        </div>
        <div>
          <LogoProps imgUrl={brand_logo7} style1={logoProps_container_small} />
          <LogoProps imgUrl={brand_logo8} style1={logoProps_container_small} />
          <LogoProps imgUrl={brand_logo9} style1={logoProps_container_small} />
          <LogoProps imgUrl={brand_logo10} style1={logoProps_container_small} />
          <LogoProps imgUrl={brand_logo11} style1={logoProps_container_small} />
          <LogoProps imgUrl={brand_logo12} style1={logoProps_container_small} />
        </div>
      </div>
    </div>
  );
};

export default About;
