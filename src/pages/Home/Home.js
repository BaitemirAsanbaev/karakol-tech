
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Curtain from "../../components/Curtain/Curtain";
import FAQ from "../../components/FAQ/FAQ";
import Feedback from "../../components/Feedback/Feedback";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <div>
      <Nav
        first_link="Курсы"
        second_link="Отзывы"
        third_link="О нас"
        footer = "Контакты"/>
      <Header />
      <Courses />
      <Feedback />
      <About />
      <FAQ />
      <Curtain/>
      
    </div>
  );
}

export default Home;