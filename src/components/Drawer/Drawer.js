import Nav from "../Nav/Nav";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./Drawer.module.scss"

const Drawer = ({ open, closeDrawer, which }) => {
  const drawerClasses = [classes.content, open ? classes.open : classes.close];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <Nav
        drawer={true}
        first_link = {which ? "Преподователь": "Курсы" }
        second_link = {which ? "Программа обучения": "Отзывы" }
        third_link = {which ? "О курсе": "О нас" }/>
      </div>
    </div>
  );
}

export default Drawer;