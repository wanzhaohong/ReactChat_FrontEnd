import React, { useContext, useRef } from 'react';
import {Link} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

// import css
import './Join.css';

import {loginCall} from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";


const Join = () => {
    const name = useRef();
    const password = useRef();

    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (event) => {
        event.preventDefault();
        loginCall({
            username: name.current.value, 
            password: password.current.value
        }, dispatch);
    };

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join the Chat room</h1>
                <form className="loginbox" onSubmit={handleClick}>
                    <input placeholder="Name" className="joinInput" type="text" ref={name} required />
                    
                    <input placeholder="Password" className="joinInput mt-20" type="password" ref={password} required />

                    {/* <input placeholder="Chat room" className="joinInput mt-20" type="text" ref={room} required /> */}
                    
                    <button className="button mt-20" type="submit">{isFetching ? <CircularProgress size="20px" /> : "Sign in"}</button>
                    
                </form>
                <h3>OR</h3>
                <Link to={'/register'}>
                    <button className="button-sign-up">{isFetching ? <CircularProgress size="20px" /> : "Sign up"}</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Join;


{/* <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
    <button className="button mt-20" type="submit">Sign in</button>
</Link> */}