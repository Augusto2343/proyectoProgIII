import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Banner from './components/Banner'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>
}>        
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
