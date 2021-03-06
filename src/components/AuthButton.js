import React from 'react';
import {useAuth} from '../provider/AuthProvider';


import {useHistory} from 'react-router-dom';

const AuthButton = () => {
    const {user, signOut} =  useAuth();
    const history = useHistory();

    return (<div> {""} {user ? <button onClick={() => {signOut(()=> {history.push("/")})}}>Logout</button> : "You are not logIn"} {""} </div>);
}

export default AuthButton;

