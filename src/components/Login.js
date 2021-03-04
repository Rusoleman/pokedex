import React from 'react';
import {useAuth} from '../provider/AuthProvider';

import {useHistory} from 'react-router-dom';

const Login = () => {
    const {signIn} = useAuth();
    const history = useHistory();
    
    return <button onClick={() => signIn(() => { history.push('/pokedex') })}>Login</button>
};

export default Login;