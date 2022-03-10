import classes from "./Header.module.scss";
import laptop from "../../assets/laptop.png"

const Header = () => {
  return (<div className={classes.Header}>
    <div className={classes.HeaderContent}>
      <h1>Karakol <span>Tech</span></h1>
      <h2>IT Academy</h2>
      <p>Lorem ipsum dolar sit amet consestutetis Lorem ipsum dolar sit amet consestutetis </p>
      <button>Записаться</button>
    </div>
    <div>
      <img src={laptop} width='500'/>
    </div>
  </div>);
}

export default Header;