import { useState } from "react";
import Nav from './components/Nav/Nav';
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
      <Nav openDrawer={() => setDrawerOpen(true)} drawer={false}/>
      <Routes>
        <Route element={<Home/>} path="/" index/>
        <Route element={<Course/>} path=":courseID"/>
      </Routes>
      <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)}/>
      <Footer/>
    </div>
);
}

export default App;
