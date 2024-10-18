import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import pfp from '../assets/pfp.webp';
import { context } from '../data/index';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const Navbar = () => {
  const [bar, setBar] = useState(false);

  const navegar = useNavigate();


  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.displayName);
        setEmail(user.email);
        setLoggedIn(true);
      } else {
        setUser(null);
        setEmail("");
        setLoggedIn(false);
      }
    })
  })

  const logOut = () => {
    auth.signOut().then(() => {
      setLoggedIn(false);
      navegar('/');
    })
  }

  const go = () => {
    navegar('/app/profile');
  }

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="cat"/>
        <div className='links'>
            <a href="/app">Cats</a>
            <a href="/contact">GitHub</a>
            {loggedIn && <img className="profilePic" onClick={() => setBar(!bar)}  src={pfp} alt="" />}
        </div>
      </div>

      {bar && <div className='profileBar'>
        <div className='profileRow especial'>
          <img src={pfp} alt="" />
          <span>{user}</span>
        </div>
        <div className='profileRow'>
          <span onClick={() => go()}>My Profile</span>
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
