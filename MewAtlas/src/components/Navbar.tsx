import React, { useState } from 'react';
import logo from '../assets/logo.png';
import pfp from '../assets/pfp.webp';
import { context } from '../data/index';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [bar, setBar] = useState(false);

  const navegar = useNavigate();

  const logOut = () => {
    context.logged = false;
    context.email = "";
    context.user = "";
    setBar(false);
    navegar('/');
  }

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="cat"/>
        <div className='links'>
            <a href="/about">About</a>
            <a href="/contact">GitHub</a>
            {context.logged && <img className="profilePic" onClick={() => setBar(!bar)}  src={pfp} alt="" />}
        </div>
      </div>

      {bar && <div className='profileBar'>
        <div className='profileRow especial'>
          <img src={pfp} alt="" />
          <span>{context.user}</span>
        </div>
        <div className='profileRow'>
          <span>My Profile</span>
        </div>
        <div className='profileRow'>
          <span>Change account</span>
        </div>
        <div className='profileRow purple'>
          <span onClick={() => logOut()}>lOG-OUT</span>
        </div>
       </div>}
    </>
  )
}
