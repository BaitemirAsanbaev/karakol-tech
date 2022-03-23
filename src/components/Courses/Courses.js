import { Link } from "react-router-dom";
import classes from "./Courses.module.scss";
import front_thumb from "../../assets/frontend-thumbnail.png"
import media_thumb from "../../assets/media-thumbnail.png"

const Courses = () => {
  return (<div id="courses" className={classes.Courses}>
    <div className={classes.card}>
      <img src={front_thumb}/>
      <div className={classes.card_info}>
        <h4>Курс frontend разработки</h4>
        <span>lorem ipsum dolar amet consesturnlorem ipsum dolar amet consesturnlorem ipsum dolar amet consesturn</span>
        <div className={classes.card_buttons}>
          <Link to="/frontend">Записаться</Link>
          <Link to="/frontend">Узнать больше</Link>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <img src={media_thumb}/>
      <div className={classes.card_info}>
        <h4>Курс медиа грамотности</h4>
        <span>lorem ipsum dolar amet consesturnlorem ipsum dolar amet consesturnlorem ipsum dolar amet consesturn</span>
        <div className={classes.card_buttons}>
          <Link to="/media-literacy">Записаться</Link>
          <Link to="/media-literacy">Узнать больше</Link>
        </div>
      </div>
    </div>

  </div>);
}

export default Courses;