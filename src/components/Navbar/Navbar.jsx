import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('Home')
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <Link  to="/" className={menu==="Home"?"active":""} onClick={()=>setMenu("Home")}>Home</Link>
        <a href="#explore-menu" className={menu==="Menu"?"active":""} onClick={()=>setMenu("Menu")}>Menu</a>
        <a href="#app-download" className={menu==="Mobile-App"?"active":"" } onClick={()=>setMenu("Mobile-App")}>Mobile-App</a>
        <a href="#footer"className={menu==="Contact Us"?"active":""} onClick={()=>setMenu("Contact Us")}>Contact Us</a>

      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SignIn</button>
      </div>
    </div>
  )
}

export default Navbar
