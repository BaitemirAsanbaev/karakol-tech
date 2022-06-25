import classes from "./Header.module.scss";
import laptop from "../../assets/laptop.png"
import Register from "../Register/Register";

const Header = () => {
  return (<div className={classes.Header}>
    <div className={classes.HeaderContent}>
      <h1>Karakol <span>Tech</span></h1>
      <h2>IT Academy</h2>
      <p>Lorem ipsum dolar sit amet consestutetis Lorem ipsum dolar sit amet consestutetis </p>
      <Register/>
    </div>
    <div>
      <img alt="img" src={laptop} width='500'/>
    </div>
  </div>);
}

export default Header;