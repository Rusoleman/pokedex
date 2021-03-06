import React,{ useState, useEffect} from 'react';
import {useParams, Redirect, Link} from 'react-router-dom'
import './IndPokeCard.css'

import axios from 'axios';
import { useAuth } from '../provider/AuthProvider';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const IndPokeCard = () => {
    const { id } = useParams()
    const {user} = useAuth()
    const [dataPoke, setDataPoke] = useState([])
    const[generalChars, setGeneralChars] = useState({})
    const[abilities, setAbilities] = useState([])
    const[moves, setMoves] = useState([])
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`
    
    useEffect(() => {
        const dataEndpoint = () => {
            const response = axios.get(endpoint)
            response.then(response =>{
                setDataPoke(response.data)
                setGeneralChars({
                    height: response.data.height,
                    weight: response.data.weight
                })
                setAbilities(response.data.abilities)
                setMoves(response.data.moves)
            })
            .catch(err =>{
                console.log(err)
            })
        }    
        dataEndpoint()
    },[id, endpoint])

    const pokeAbility = abilities.map((item) =>{
        return <li key={item.ability.name}>{item.ability.name}</li>
    })

    const pokeMoves = moves.map((item) =>{
        return <li key={item.move.name}>{item.move.name}</li>
    })

    return(
        <div className="poke-ind">
        {
            user ? <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            <div className="circle-base">
                                    <div className="circle-contrast">
                                        <div className="circle-center">
                                                <div className="container-image">
                                                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="pokemon"/>
                                                </div>
                                        </div>
                                    </div>
                                <div className="bar"></div>
                            </div>
                            <div className="dats-poke">
                                <Link to="/pokedex"><KeyboardBackspaceIcon fontSize="large"/></Link>
                                <div className="encounters"><Link to={`/pokedex/pokemon/${id}/encounters`}>Encounters</Link></div>
                                <h2>{dataPoke.name}</h2>
                                <div className="general-poke">
                                    <div>
                                        <p>Height: <span>{generalChars.height}</span> </p>
                                        <p>Weight: <span>{generalChars.weight}</span> </p>
                                    </div>
                                    <div className="habilities">
                                        <h4>Habilities</h4>
                                        <div>{pokeAbility}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    <div className="col-lg-3 col-xl-3 moves-side">
                        <div className="moves-body">
                            <h3>Moves</h3>
                            <div className="list-moves">
                                <ul>
                                    {pokeMoves}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        :
        <Redirect to="/"/>
        }
        </div>
    )
}

export default IndPokeCard;