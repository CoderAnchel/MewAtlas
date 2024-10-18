import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserDetails = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [image, setImage] = useState("");
  const [lastSignInTime, setLastSignInTime] = useState("");
  const [creationTime, setCreationTime] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.displayName);
        setEmail(user.email);
        setImage(user.photoURL);
        setLastSignInTime(user.metadata.lastSignInTime);
        setCreationTime(user.metadata.creationTime);
        setLoggedIn(true);
      } else {
        setUser(null);
        setEmail("");
        setLoggedIn(false);
      }
    });
  });

  return (
    <>
      <Navbar />
      {loggedIn &&
      <div className="profileMain">
            <div className="block1">
                 <h1 className="titleProfile">User Details</h1>
                <img src={image} alt="" className="profileMainPic"/>
                <div className="contents">
                    <h3 className="titles">User: </h3>
                    <h2>{user}</h2>
                    <h3 className="titles">Email:</h3>
                    <h2>{email}</h2>
                    <h3 className="titles">Last Sign In Time: </h3>
                    <h2 className="date">{lastSignInTime}</h2>
                    <h3 className="titles">Creation Time: </h3>
                    <h2 className="date">{creationTime}</h2>
                </div>
            </div>
            <div className="block2">
                <h1>Cats</h1>
            </div>
      </div>
    }
    </>
  );
};

export default UserDetails;
