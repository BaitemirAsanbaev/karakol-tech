
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Feedback from "../../components/Feedback/Feedback";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Home = ({ openDrawer, drawer }) => {
  return (
    <div>
      <Nav
        openDrawer={openDrawer}
        drawer={drawer}
        first_link="Курсы"
        second_link="Отзывы"
        third_link="О нас"
        footer = "Контакты"/>
      <Header />
      <Courses />
      <Feedback />
      <About />
      <FAQ />
    </div>
  );
}

export default Home;