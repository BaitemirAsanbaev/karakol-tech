import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";

const Nav = ({ openDrawer, drawer }) => {
  return  drawer ?  (
    <div className={classes.dr_Nav}>
      <ul>
        <li><a><Logo /></a></li>
        <li><a>Курсы</a></li>
        <li><a>Отзывы</a></li>
        <li><a>О нас</a></li>
        <li><a>Контакты</a></li>
      </ul>
    </div>
  ):
  <div className={classes.Nav}>
      <ul>
        <li><a>Курсы</a></li>
        <li><a>Отзывы</a></li>
        <li><a><Logo /></a></li>
        <li><a>О нас</a></li>
        <li><a>Контакты</a></li>
      </ul>
      <DrawerOpen click={openDrawer} />
    </div>
}

export default Nav;