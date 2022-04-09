
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Drawer from "../../components/Drawer/Drawer";
import FAQ from "../../components/FAQ/FAQ";
import Feedback from "../../components/Feedback/Feedback";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Home = ({ openDrawer, drawer, drawerOpen, closeDrawer }) => {
  return (
    <div>
      <Nav
        openDrawer={openDrawer}
        drawer={drawer}
        first_link="Курсы"
        second_link="Отзывы"
        third_link="О нас"/>
      <Header />
      <Courses />
      <Feedback />
      <About />
      <FAQ />
      
      <Drawer open={drawerOpen} closeDrawer={closeDrawer} which={false}/>
    </div>
  );
}

export default Home;