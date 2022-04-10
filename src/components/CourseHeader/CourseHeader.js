import classes from "./CourseHeader.module.scss";

const CourseHeader = () => {
  return (
    <div className={classes.CourseHeader}>
      <div className={classes.Container}>
        <h1>Курс <span>frontend</span> разработки</h1>
        <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом.</p>
        <button><a href='https://forms.gle/QqfdEt4P6W9irVAVA'>Записаться</a></button>
      </div>
    </div>
  );
}

export default CourseHeader;