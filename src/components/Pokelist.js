import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokecard from './Pokecard'
import './PokeList.css'
import Header from './Header'
import { useAuth } from '../provider/AuthProvider'
import { Redirect } from 'react-router-dom'
import PokeCardName from './PokeCardName'
import Pagination from '../archives/Pagination'

function Pokelist() {
    const [pokelist, setpokelist] = useState([])
    const [pokeName, setPokeName] = useState("")
    const [pokeNameData, setPokeNameData] = useState([])
    const [pokeType, setPokeType] = useState([])
    const {user, baseUrl} = useAuth()

    const [error, setError] = useState("")

    const [currenPage, setCurrentPage] = useState(1)
    const [pokePerPage] = useState(4)
    
    useEffect(() => {
        const getData = async () => {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
          setpokelist(res.data.results)     
        }        
        getData()

        
        return () => {
            setpokelist([])
        }
    },[pokePerPage])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                setPokeNameData(res.data) 
            }
            catch (error) {
                if(error.response.status === 404) {
                    setError("No se encontro el pokemon")
                }
            }
          }        
          getData()
    }, [pokeName])

    useEffect(() => {
        if(baseUrl) {
                const getFilter = async () => {
                    const res = await axios.get(`https://pokeapi.co/api/v2/type/${baseUrl}`)
                    setPokeType(res.data.pokemon)
                }
                getFilter()
            }
    }, [baseUrl, pokePerPage])

    const indexOfLastPoke = currenPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke = pokelist.slice(indexOfFirstPoke, indexOfLastPoke)
    const currentType = pokeType.slice(indexOfFirstPoke, indexOfLastPoke)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pokeMap = currentPoke.map((value)=> {      
        return <Pokecard name={value.name} url={value.url} key={value.name}/>
    })

    const pokeTypes = currentType.map((value)=> {      
        return <Pokecard name={value.pokemon.name} url={value.pokemon.url} key={value.pokemon.name}/>
    })

    return (
        <>
            {
                user ? 
                <> 
                <Header setPokeName={setPokeName}/>
                 {
                    pokeName ?
                     <>
                        {
                            error ?
                             <span style={{textAlign: 'center'}}>{error}</span>
                            :
                            <PokeCardName data={pokeNameData} />
                        }
                     </> 
                     :
                     <>
                        <div className="poke-list">
                            {pokelist && baseUrl ?
                                pokeTypes
                                :
                                pokeMap
                            }
                            
                        </div>
                        <Pagination pokePerPage={pokePerPage} currenPage={currenPage} totalPost={pokelist.length} paginate={paginate}/>
                     </>
                 }
                </>
                :
                <>
                    <Redirect to="/"/>
                </>
                
            }
            
        </>
    )

}

export default Pokelist
