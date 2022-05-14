import './App.css';
import Hola  from './components/Hola'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='hola'>hola</div>
      <Hola/>
    </div>
  );
}

export default App;
