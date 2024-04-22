import styles from "./About.module.css";

const LogoProps = (props) => {
  return (
    <div style={props.style1}>
      <img src={props.imgUrl} alt="img" />
    </div>
  );
};

export default LogoProps;
