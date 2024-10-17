import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { useNavigate } from 'react-router-dom';
import { context } from './data';

const Start = () => {

    const [Window, setWindow] = useState(false);
    const [Window2, setWindow2] = useState(false);
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [data, setdata] = useState([]);

    const navegar = useNavigate();

    const getUser = (user: string, password: string) => {
        fetch(`http://localhost:8080/api/Users/${user}/${password}`).then(response => response.json())
        .then(data => {
            setdata(data);
            setWindow2(!Window2);
            if(user == data.username && password == data.password){
                console.log('User Verified  ✅');
                console.log(data);
                navegar('/app');
                context.logged = true;
                context.user = data.username;
                context.email = data.email;
            };
            setUser("");
            setPassword("");
        }).catch(error => console.error('Usuario o Contraseña Incorrectos ❌:', error));
    }

    const putData = (email: string, user: string, password: string) => {
        let objectData = {
            email: email,
            password: password,
            username: user,
        }
        fetch("http://localhost:8080/api/Users/introduce", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(objectData)
        }).then(response => response.json())
        setEmail("");
        setUser("");
        setPassword("");
        setWindow(!Window);
        console.log('User Created ✅', objectData);
    }

 return (
    <>
        <Navbar />

        {Window && <div className='Window'>
            <span className='closer' onClick={() => setWindow(!Window)}>❌</span>
            <div className='windowWrapper'>
                <h1 className='windowTitle'>Create Account</h1>
                <div className="popUpRow windowRow">
                    <span>Email</span>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="popUpRow windowRow">
                    <span>User</span>
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="popUpRow windowRow">
                    <span>Password</span>
                    <input className='pass' type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='sender' onClick={() => putData(email, user, password)}>CREATE</button>
            </div>
        </div>}


        {  Window2 && <div className='Window'>
            <span className='closer' onClick={() => setWindow2(!Window2)}>❌</span>
            <div className='windowWrapper'>
                <h1 className='windowTitle'>Log-In</h1>
                <div className="popUpRow windowRow">
                    <span>Username</span>
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="popUpRow windowRow">
                    <span>Password</span>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='sender' onClick={() => getUser(user, password)}>ENTER</button>
            </div>
        </div>}

        <div className='startContent'>
            <div className='startContainer'>
                <div className='containerContent'>
                    <h1 className='contenTitle'>MewAtlas🐾</h1>
                    <div className='boxesWrapper'>
                    <div className='boxes'>
                        <span onClick={() => setWindow2(!Window2)}>Log-In</span>
                        <span onClick={() => setWindow(!Window)}>Sign-Up</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Start
