import classes from "./Mentor.module.scss";
import mentorPhoto from "../../assets/mentor.png";

const Mentor = () => {
  return (
  <div className={classes.Mentor}>
    <div className={classes.Text}>
      <h2>Эламан Имашев</h2>
      <span>Преподаватель</span>
      <p>В коммерческой разработке более 4х лет. За это время успела поработать в MadDevs - одной из крупнейших IT-компаниях Бишкека. После этого, перешла на удаленную работу в канадской компании. Сейчас фрилансит на зарубежных платформах.</p>
      <p>В Академии с 2018 года. Зарекомендовала себя как открытый, тепрпеливый и очень доступно объясняющий ментор.</p>
    </div>
    <div className={classes.Photo}>
      <img src={mentorPhoto} alt="mentor" />
    </div>
  </div>
  );
}

export default Mentor;