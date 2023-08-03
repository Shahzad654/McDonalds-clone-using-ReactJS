import {React, useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { AppBar, Button,  CssBaseline, Toolbar} from '@mui/material'
import Logo from '../../assets/logo.png'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import  Menu  from '../../components/Menu/Menu'
import HamMenu from '../HamburgerMenu/HamMenu'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState('false')


  function handleClick(){
    setShowMenu(!showMenu)
  }
 
    
  return (
    <>
     <CssBaseline/>
     <AppBar position='static'>
        <Toolbar>
          <div className='logo_div'>
          <img src={Logo} alt='Logo' className='logo'/>

          </div>
          

        {showMenu ? <AiOutlineMenu onClick={handleClick} className='hamburger_menu'/> : 
            <HamMenu/>
  }
         
            <Link to='/home' className='navigation'>Home</Link>
            <Link to='/menu' className='navigation'>Our Menu</Link>
            <Link to='/about' className='navigation'>About Our Food</Link>
            <Link to='/Right' className='navigation'>Your Right To Know</Link>
            <Link to='/aboutapp' className='navigation'>Our App</Link>
            <Link to='/family' className='navigation'>Family</Link>

            <Button variant='contained' color='secondary' style={{marginLeft:'60px'}}>Order on McDonalad</Button>
            
             

        </Toolbar>
            
        </AppBar>

        <Routes>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>

    
    </>
  )
}

export default Navbar
