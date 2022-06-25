import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";
import courses from "../../assets/courses.svg"
import feedback from "../../assets/feedback.svg"
import about from "../../assets/about.svg"
import contact from "../../assets/contact.svg"

const Nav = ({ first_link, second_link, third_link, footer }) => {
  return (
    <div className={classes.Nav}>
      <ul>
        <li><a href="#courses">
          <span>{first_link}</span>
          <img className={classes.link} alt="courses" src={courses} />
        </a></li>
        <li><a href="#feedback">
          <span>{second_link}</span>
          <img className={classes.link} alt="feedback" src={feedback} />
        </a></li>
        <Link to="/" onClick={() => document.body.scrollIntoView()}><Logo /></Link>
        <li><a href="#about">
          <span>{third_link}</span>
          <img className={classes.link} alt="about" src={about} />
        </a></li>
        <li><a href="#footer">
          <span>{footer}</span>
          <img className={classes.link} alt="contacts" src={contact} />
        </a></li>
      </ul>
    </div>
  )
}

export default Nav;