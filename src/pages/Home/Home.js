import About from "../../components/About/About";
import FAQ from "../../components/FAQ/FAQ";
import Feedback from "../../components/Feedback/Feedback";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Feedback/>
      <About />
      <FAQ />
    </div>
  );
}

export default Home;