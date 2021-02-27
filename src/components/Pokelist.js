import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokecard from './Pokecard'

function Pokelist() {
    const [pokelist, setpokelist] = useState([])
    useEffect(() => {
        const getData = async () => {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
          setpokelist(res.data.results)     
        }        
        getData()
    },[])
    const pokeMap = pokelist.map((value)=> {      
        return <Pokecard name={value.name} url={value.url} key={value.name} />

    })

    return (
        <div>
            {pokelist && pokeMap}
        </div>
    )

}

export default Pokelist
