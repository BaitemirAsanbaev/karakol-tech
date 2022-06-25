import './App.scss';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import Course from "./pages/Course/Course"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />}
          path="/" index />
        <Route element={<Course />}
          path=":courseID" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
