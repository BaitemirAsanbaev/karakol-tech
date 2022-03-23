import { Link } from "react-router-dom";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";

const Nav = ({ openDrawer, drawer, first_link, second_link, third_link }) => {
  return drawer ? (
    <div className={classes.dr_Nav}>
      <ul>
        <Link to="/"><a><Logo /></a></Link>
        <li><a href="#courses">{first_link}</a></li>
        <li><a href="#feedback">{second_link}</a></li>
        <li><a href="#about">{third_link}</a></li>
        <li><a href="#footer">Контакты</a></li>
      </ul>
    </div>
  ) :
    <div className={classes.Nav}>
      <ul>
        <li><a href="#courses">{first_link}</a></li>
        <li><a href="#feedback">{second_link}</a></li>
        <Link to="/"><a><Logo /></a></Link>
        <li><a href="#about">{third_link}</a></li>
        <li><a href="#footer">Контакты</a></li>
      </ul>
      <DrawerOpen click={openDrawer} />
    </div>
}

export default Nav;