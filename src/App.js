
import './App.css';
import { Route, Routes } from 'react-router';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Components/Home';
import Guitars from './Components/Guitars';
import GuitarDetails from './Components/GuitarDetails';
import AddGuitar from './Components/AddGuitar';
import { useEffect, useState } from 'react';
import About from './Components/About';
import NavigationBar from './Components/UI Elements/NavigationBar';



function App() {

  const [guitars, setGuitars] = useState()

  async function handleFetch() {
    const url = "https://flaskapi.ttguitarnoob.cloud/guitars"
    const options = {
      method: "GET"
    }


    try {
      const response = await fetch(url, options)
      console.log('respsons', response)
      const data = await response.json()

      console.log('daatatat', data)
      setGuitars(data)
    } catch (err) {
      console.log('something terrible happend when fetching', err)
    }
  }

  useEffect(() => {
    handleFetch()
    console.log('effect was used')
  }, [])
  return (
    <NextUIProvider>
      <div className="App dark text-foreground bg-background">
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guitars' element={<Guitars guitars={guitars} />} />
          <Route path='/guitars/:id' element={<GuitarDetails />} />
          <Route path='/guitars/new' element={<AddGuitar />} />
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;
