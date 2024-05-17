import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none"}}><h1 className='shopTitle'>ShopByte</h1></Link>
      
        <div className="searchBar">
    <form className="d-flex" role="search">
      <input className="searchInput" type="search" placeholder="  Search ShopByte.co.uk" aria-label="Search"/>
      <button className="searchBtn" type="submit"><SearchIcon style={{ fontSize: '2rem' }}/></button>
    </form>
  </div>

  <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><ShoppingCartIcon style={{ fontSize: '2rem', color: "#febd68"}}/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar