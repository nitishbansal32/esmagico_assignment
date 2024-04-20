import styles from "./About.module.css";

const LogoProps = (props) => {
  const logoProps_container = {
    width: "9.375em",
    height: "6.25em",
  };
  return (
    <div style={props.style1}>
      <img src={props.imgUrl} alt="img" />
    </div>
  );
};

export default LogoProps;
