import Nav from "../Nav/Nav";
import classes from "./Toolbar.module.scss"

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <nav>
        <Nav />
      </nav>
    </div>
   );
}

export default Toolbar;