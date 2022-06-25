import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import classes from "./CourseNav.module.scss";
import mentor from "../../assets/mentor.svg"
import roadmap from "../../assets/roadmap.svg"
import about from "../../assets/about.svg"
import contact from "../../assets/contact.svg"

const CourseNav = ({ first_link, second_link, third_link, footer }) => {
  return (
    <div className={classes.CourseNav}>
      <ul>
        <li><a href="#mentor">
          <span>{first_link}</span>
          <img className={classes.link} alt="mentor" src={mentor} />
        </a></li>
        <li><a href="#roadmap">
          <span>{second_link}</span>
          <img className={classes.link} alt="roadmap" src={roadmap} />
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

export default CourseNav;