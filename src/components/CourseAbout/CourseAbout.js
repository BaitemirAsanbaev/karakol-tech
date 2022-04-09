import classes from "./CourseAbout.module.scss";
import frontendImg from "../../assets/frontendImg.png";

const CourseAbout = () => {
  return (
    <div className={classes.CourseAbout}>
      <h1>Что такое <span>frontend</span>?</h1>
      <div className={classes.FrontendCard}>
        <img src={frontendImg} />
        <div className={classes.Text}>
          <p>Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки, анимации и даже бесячая реклама.</p>
          <p> Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.</p>
          <p>В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это также одно из самых популярных направлений для фриланса и удаленной работы. Все потому, что в современном мире сайт нужен каждому</p>
        </div>
      </div>
    </div>
  );
}

export default CourseAbout;