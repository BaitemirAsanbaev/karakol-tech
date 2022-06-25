import classes from "./CourseHeader.module.scss";

const CourseHeader = () => {
  return (
    <div className={classes.CourseHeader}>
      <div className={classes.Container}>
        <h1>Курс <span>frontend</span> разработки</h1>
        <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом.</p></div>
    </div>
  );
}

export default CourseHeader;