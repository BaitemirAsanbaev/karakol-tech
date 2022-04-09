import { useState } from "react";
import './App.scss';
import Home from './pages/Home/Home';
import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import Course from "./pages/Course/Course"
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route element={<Home
          openDrawer={() => setDrawerOpen(true)}
          drawer={false}
          drawerOpen={drawerOpen}
          closeDrawer = {()=> setDrawerOpen(false)}
          />}
            path="/" index/>
        <Route element={<Course
        openDrawer={() => setDrawerOpen(true)}
        drawer={false}
        drawerOpen={drawerOpen}
        closeDrawer = {()=> setDrawerOpen(false)}

        />}
          path=":courseID"/>
      </Routes>
      <Footer/>
    </div>
);
}

export default App;
