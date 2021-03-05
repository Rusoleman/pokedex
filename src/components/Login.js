import React from 'react';
import { useAuth } from '../provider/AuthProvider';
import './Login.css'


import {useHistory} from 'react-router-dom';

const Login = () => {
    const {setTrainner, signIn} = useAuth()
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault()
        signIn(() => {})
        history.push('/pokedex')
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