import './App.css';
import Barra from './components/Barra';
import Foot from './components/Foot';
import Home from './components/Home';
import Porque from './components/Porque';
import Como from './components/Como';
import Mas from './components/Mas';


function App() {
  return (
    <div className="App">
      <Barra/>
      <Home/>
      <Porque/>
      <Como/>
      <Mas/>
      <Foot/>
    </div>
  );
}

export default App;
