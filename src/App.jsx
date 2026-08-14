import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Banner from './components/banner/Banner'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BtnVolverArriba from './components/BtnVolverArriba'
import Contacto from './components/Contacto'
import ToyotaEsc from './components/escuderias/ToyotaEsc'
import FordEsc from './components/escuderias/FordEsc'
import HyundaiEsc from './components/escuderias/HyundaiEsc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>  </Navbar>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/hyundaiwrt" element={<HyundaiEsc/>}></Route>
        <Route path="/fordwrt" element={<FordEsc/>}></Route>
        <Route path="/tgrwrt" element={<ToyotaEsc/>}></Route>
      </Routes>
        <BtnVolverArriba></BtnVolverArriba>
      <Footer></Footer>
    </>
  )
}

export default App
