import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Banner from './components/Banner'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BtnVolverArriba from './components/BtnVolverArriba'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>  </Navbar>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}>        
        </Route>
      </Routes>
        <BtnVolverArriba></BtnVolverArriba>
      <Footer></Footer>
    </>
  )
}

export default App
