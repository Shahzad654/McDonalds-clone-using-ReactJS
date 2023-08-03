import { React } from 'react'
import Home from './components/Home/Home'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import  Menu  from './components/Menu/Menu'
import About from './components/About/About'
import Right from './components/Right/Right'
import Application from './components/App/Application'
import Family from './components/Family/Family'


function App() {

  return (
    <>
      
      <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Right' element={<Right/>}/>
        <Route path='/aboutapp' element={<Application/>}/>
        <Route path='/family' element={<Family/>}/>
        
      </Routes>

    </>
  )
}

export default App
