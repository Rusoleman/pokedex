import React,{ useState} from 'react';
import {useAuth} from '../provider/AuthProvider';
import Login from './Login';

import {Redirect, useHistory} from 'react-router-dom';

const AuthButton = () => {
    const {user, signOut} =  useAuth();
    const history = useHistory();

    console.log(history);

    const location = {
        pathname: '/'
    }

    const handle = () => {
        history.push(location)
    }

    return (<div> {""} {user ? <button onClick={() => {signOut(()=> {})
            history.push(direction)}}>Logout</button> : "You are not logIn"} {""} </div>);
}

export default AuthButton;

