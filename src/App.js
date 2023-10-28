import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import About from "./components/About";
import Booktable from './components/Booktable';
import{Routes,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/reservation" element={<Booktable/>}/>
    </Routes>
    <Header/>
    <Main/>
    <Menu/>
    <Testimonial/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
