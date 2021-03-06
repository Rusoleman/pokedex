import React, { useEffect, useState } from 'react';
import { useAuth } from '../provider/AuthProvider';
import './Login.css'


import {useHistory} from 'react-router-dom';

const Login = () => {
    const {setUser, signIn, user} = useAuth()
    const [tainner, setTrainner] = useState('')
    const history = useHistory();

    useEffect(() => {
        if(user) {
            history.push('/pokedex')
        }
    }, [user, history])

    const handleLogin = (e) => {
        e.preventDefault()
        signIn(() => {
            setUser(tainner)
        })
        
    }

    
    return (
        <div className="login__site">
            <img src="https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/senalradionica/articulo-noticia/galeriaimagen/pokemonfront.jpg?itok=JFjC_3Rf" alt="login img"/>

            <form onSubmit={(e) => handleLogin(e)}>
                <div>
                    <input placeholder="Name, Pokemon Trainner!" onChange={e => setTrainner(e.target.value)}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;