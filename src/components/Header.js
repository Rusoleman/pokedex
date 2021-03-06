import React, { useState } from 'react'
import './Header.css'

import {useAuth} from '../provider/AuthProvider';
import SearchIcon from '@material-ui/icons/Search';


import Types from '../archives/Types'

const Header = ({setPokeName}) => {
    const {signOut, setBaseUrl} =  useAuth();
    const [pokeNameInput, setPokeNameInput] = useState(null)

    const handleLogOut = () => {
        signOut(() => {})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPokeName(pokeNameInput)
    }

    const handleType = (e) => {
        if(e.target.value === "All") {
            setBaseUrl(null)
        } else {
            setBaseUrl(e.target.value)
        }
    }

    return (
        <div className="header__site">
            <div className="searchs">
                 <form onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder="Write Pokemon Name or id" onChange={(e) => setPokeNameInput(e.target.value)}/>
                    <button><SearchIcon /></button>
                </form> 
            </div>
            <select onChange={(e) => handleType(e)}>
                <option value={null}>All</option>
                {Types.map((type) => (
                    <option key={type.name}>{type.name}</option>
                ))}
            </select> 
            <button onClick={() => handleLogOut()}>Log Out</button>
        </div>
    )
}

export default Header
