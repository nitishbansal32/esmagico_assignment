import styles from "./Header.module.css";
import logo from "../../assets/logo_esmagico.svg";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.main_container}>
      <img src={logo} alt="" />
      <div className={styles.sub_container}>
        <a href="/">Page 1</a>
        <a href="/">Page 2</a>
        <a href="/">Page 3</a>
        <a href="/">Page 4</a>
        <button className={styles.button_container}>
          {" "}
          CTA
          <img src={arrow} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
