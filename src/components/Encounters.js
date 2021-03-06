import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../provider/AuthProvider'
import './Encounters.css'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const Encounters = () => {
    const { id } = useParams()
    const [location, setLocation] = useState([])
    const { user } = useAuth() 

    useEffect(() => {
        const getLocation = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
                setLocation(res.data)
        }
        getLocation()
    }, [id])
    
    const arrRegion = location.map((item) => {
        return <li key={item.location_area.name}>{item.location_area.name}</li>
    })
    return (
        <>
        {
         user ? 
          <div className="encounters-site">
            <Link to="/pokedex"><KeyboardBackspaceIcon fontSize="large"/></Link>
            {location.length ? arrRegion : <h3>Lo siento, no se encontro Region para este pokemon !</h3>}
          </div>
        :
        <Redirect to="/"/>
        }
        </>
    )
}

export default Encounters


