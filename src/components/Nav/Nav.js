import { Link } from "react-router-dom";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";

const Nav = ({ openDrawer, drawer, first_link, second_link, third_link,footer, href1, href2, href3, href4}) => {
  return drawer ? (
    <div className={classes.dr_Nav}>
      <ul>
        <Link to="/" onClick={()=> document.body.scrollIntoView()}><Logo /></Link>
        <li><a href={href1}>{first_link}</a></li>
        <li><a href={href2}>{second_link}</a></li>
        <li><a href={href3}>{third_link}</a></li>
        <li><a href={href4}>{footer}</a></li>
      </ul>
    </div>
  ) :
    <div className={classes.Nav}>
      <ul>
        <li><a href={href1}>{first_link}</a></li>
        <li><a href={href2}>{second_link}</a></li>
        <Link to="/" onClick={()=> document.body.scrollIntoView()}><Logo /></Link>
        <li><a href={href3}>{third_link}</a></li>
        <li><a href={href4}>{footer}</a></li>
      </ul>
      <DrawerOpen click={openDrawer} />
    </div>
}

export default Nav;