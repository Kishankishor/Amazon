import React from 'react'
import SearchIcon  from '@mui/icons-material/Search';
import './header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/Stateprovider';
import { auth } from '../firebase';


export const Header = () => {
  const [{basket , user}] = useStateValue();

 const handleAuthentication= () =>{
    if(user){
      auth.signOut();
    }
 }


  return (
    <div className='header'>
      <Link to="/">
      <img className='header_logo' src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header_searchinput" />
    <SearchIcon className="header__searchicon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to = {!user && '/login'}>
        <div className="header__option" onClick={handleAuthentication}><span className="header__optionline1">{user? `${user.email}`: 'hello guest'}</span>
          <span className="header__optionline2">{user? 'sign out': 'sign in'}</span></div></Link>
        <div className="header__option"><span className="header__optionline1">Returm</span>
          <span className="header__optionline2"> & orders</span></div>
        <div className="header__option"><span className="header__optionline1">your</span>
          <span className="header__optionline2">prime</span></div>
      </div>
      <Link to="/checkout">
      <div className="header_optionbasket">
       <ShoppingBasketIcon/>
        
        <span className='header__optionline2 header__basketcount' >{basket?.length}</span>
      </div>
      </Link>

    </div>
  )
}
