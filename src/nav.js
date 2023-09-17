import React, { useState, useEffect } from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { navigate } from "react-router-dom";
import './nav.css';

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState('');
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const navigateTo = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  };

  const searchHandler = () => {
    searchbtn(search);
    navigateTo("./product");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.querySelector('.nav');
      const navIconElement = document.querySelector('.nav-icon');
      if (!navElement.contains(event.target) && !navIconElement.contains(event.target)) {
        navElement.classList.remove('active');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    document.querySelector('.nav').classList.remove('active');
  };

  const handleHomePage=()=>{
    navigateTo("./");
  }

  return (
    <div className='main_header'>
      <div className='nav-icon' onClick={() => document.querySelector('.nav').classList.toggle('active')}>
        &#9776;
      </div>
      <div className='left-icons'>
        <div onClick={handleHomePage}className='logo'>
          <img src='./img/logo.png' alt='logo'></img>
          <div className='logo-text'>shop<span>me</span></div>
        </div>
        <div className='nav'>
          <ul>
            <li>
              <Link to='/' className='link' onClick={handleMenuItemClick}>Home</Link>
            </li>
            <li>
              <Link to='/product' className='link' onClick={handleMenuItemClick}>Product</Link>
            </li>
            <li>
              <Link to='/contact' className='link' onClick={handleMenuItemClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='search_box'>
        <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress}></input>
        <button onClick={() => searchHandler()}>Search</button>
      </div>
      <div className='icon'>
        {isAuthenticated &&
          (
            <div className='account'>
              <div className='user_icon'>
                <AiOutlineUser />
              </div>
              <p>{user.name}</p>
            </div>
          )
        }
        <div className='third_icon'>
          <Link to="/cart" className='link' onClick={handleMenuItemClick}><BsBagCheck /></Link>
        </div>
        <div className='auth'>
          {isAuthenticated ?
            <button className='login-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button> :
            <button className='login-button' onClick={() => loginWithRedirect()}><CiLogin /></button>
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
