import Logo from "../Logo/Logo";
import './Nav.module.scss';
import classes from "./Nav.module.scss";

const Nav = () => {
  return ( <nav className={classes.Nav}>
    <ul>
      <li><a>Курсы</a></li>
      <li><a>Отзывы</a></li>
      <li><a><Logo/></a></li>
      <li><a>О нас</a></li>
      <li><a>Контакты</a></li>
    </ul>
  </nav> );
}

export default Nav;