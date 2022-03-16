import { useState } from "react";
import Nav from './components/Nav/Nav';
import './App.scss';
import Home from './pages/Home/Home';
import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer/Footer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="App">
      <Nav openDrawer={() => setDrawerOpen(true)} drawer={false}/>
      <Home/>
      <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)}/>
      <Footer/>
    </div>
);
}

export default App;
