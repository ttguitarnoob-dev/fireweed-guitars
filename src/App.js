
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Guitars from './Components/Guitars';
import GuitarDetails from './Components/GuitarDetails';
import AddGuitar from './Components/AddGuitar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guitars' element={<Guitars />} />
        <Route path='/guitars/:id' element={<GuitarDetails />} />
        <Route path='/guitars/new' element={<AddGuitar />} />
      </Routes>
    </div>
  );
}

export default App;
