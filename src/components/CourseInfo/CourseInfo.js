import Register from "../Register/Register";
import classes from "./CourseInfo.module.scss"

const CourseInfo = () => {
  return (<div id="about" className={classes.CourseInfo}>
    <h1>Информация о курсе</h1>
    <ul>
      <li>По окончанию курса выдаётся сертификат и проводится экскурсия по IT компаниям</li>
      <li>Длительность обучения: 8 месяцев</li>
      <li>Начало обучения: Октябрь</li>
      <li>Стоимость: $100 за месяц обучения </li>
    </ul>
    <Register />
  </div>);
}

export default CourseInfo;