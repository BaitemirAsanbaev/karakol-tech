import classes from "./DrawerOpen.module.scss";

const DrawerOpen = ({ click }) => {
  return (
    <div className={classes.DrawerOpen} onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerOpen;