import React from 'react'
import './hammenu.css'
import {Link} from 'react-router-dom'

const HamMenu = () => {
  return (
    <>

        <div>
            <Link to='/home' className='ham_menu_nav'>Home</Link>
            <Link to='/menu' className='ham_menu_nav'>Our Menu</Link>
            <Link to='/about' className='ham_menu_nav'>About Our Food</Link>
            <Link to='/Right' className='ham_menu_nav'>Your Right To Know</Link>
            <Link to='/aboutapp' className='ham_menu_nav'>Our App</Link>
            <Link to='/family' className='ham_menu_nav'>Family</Link>
         </div>


    
    </>
  )
}

export default HamMenu