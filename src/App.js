import Aboutpage from './components/Aboutpage';
import Booktable from './components/Booktable';
import Menupage from './components/Menupage';
import{Routes,Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    <Routes>
      <Route path="/reservation" element={<Booktable/>}/>
    </Routes>
    <Routes>
      <Route path="/about" element={<Aboutpage/>}/>
    </Routes>
    <Routes>
      <Route path="/menu" element={<Menupage/>}/>
    </Routes>
    </div>
  );
}

export default App;
