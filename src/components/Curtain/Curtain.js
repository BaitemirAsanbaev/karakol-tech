import curt from "../../assets/curtain.png"
import classes from "./Curtain.module.scss"

const Curtain = () => {
  return ( <div onClick={()=>{window.scroll(0, 0)}} className={classes.Curtain}>
    <img src={curt} alt="curtains"/>
  </div> );
}
 
export default Curtain;