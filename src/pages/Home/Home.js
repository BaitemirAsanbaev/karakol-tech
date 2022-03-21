import { Link } from "react-router-dom";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Feedback from "../../components/Feedback/Feedback";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Courses/>
      <Feedback/>
      <About />
      <FAQ />
    </div>
  );
}

export default Home;