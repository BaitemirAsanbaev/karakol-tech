import classes from "./About.module.scss";
import aboutIcon from "../../assets/about-icon.png";

const About = () => {
  return (<div className={classes.About}>
    <h1>О нас</h1>
    <p className={classes.AboutText}>Главная цель этого формата — сделать из тебя профессионального младшего разработчика. Все составляющие готовят тебя к реальным задачам, которые ты встретишь при работе на компанию или фрилансе. </p>
    <div className={classes.CardContainer}>
      <div className={classes.Card}>
        <img src={aboutIcon} width='60'/>
        <h2>Упор на практику</h2>
        <p>Более 60% обучения - работа над проектами. Ты будешь кодить не только дома, но и прямо на уроках. К концу курса это позволит сформировать настоящее партфолио работ.</p>
      </div>
      <div className={classes.Card}>
        <img src={aboutIcon} width='60'/>
        <h2>Упор на практику</h2>
        <p>Более 60% обучения - работа над проектами. Ты будешь кодить не только дома, но и прямо на уроках. К концу курса это позволит сформировать настоящее партфолио работ.</p>
      </div>
      <div className={classes.Card}>
        <img src={aboutIcon} width='60'/>
        <h2>Упор на практику</h2>
        <p>Более 60% обучения - работа над проектами. Ты будешь кодить не только дома, но и прямо на уроках. К концу курса это позволит сформировать настоящее партфолио работ.</p>
      </div>
    </div>
  </div>);
}

export default About;