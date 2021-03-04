import React,{createContext, useContext, useState} from 'react';

const authContext = createContext();

const authenticate = {
    signIn : (callback) =>{
        setTimeout(callback, 100);
    },
    signOut : (callback) =>{
        setTimeout(callback,100);
    }
};

const useAuthenticate = () => {
    const[user, setUser] = useState(null);
    
    const signIn = (callback) => {
        authenticate.signIn(() => {
            setUser('user')
            callback();
        })
    }

    const signOut = (callback) => {
        authenticate.signOut(() => {
            setUser(null)
            callback();
        })
    }

    return {
        user,
        signIn,
        signOut
    }
};

export const ProvideAuth = ({children}) => {
    const auth = useAuthenticate();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>
};

export const useAuth = () => useContext(authContext);//Return the most actual value