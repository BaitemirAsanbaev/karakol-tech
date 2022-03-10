import Nav from './components/Nav/Nav';
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Footer/>
    </div>
);
}

export default App;
