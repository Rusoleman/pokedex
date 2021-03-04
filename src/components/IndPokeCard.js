import React,{ useState, useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom'
import './IndPokeCard.css'

import axios from 'axios';
import { useAuth } from '../provider/AuthProvider';

const IndPokeCard = () => {
    const { id } = useParams()
    console.log(id)
    const {user} = useAuth()

    const[generalChars, setGeneralChars] = useState({})
    const[abilities, setAbilities] = useState([])
    const[moves, setMoves] = useState([])

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`
    
    useEffect(() => {
        const dataEndpoint = () => {
            const response = axios.get(endpoint)
            response.then(response =>{
                console.log(response)
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
    },[id])

    console.log(generalChars)
    const pokeAbility = abilities.map((item) =>{
        return <li key={item.ability.name}>{item.ability.name}</li>
    })

    const pokeMoves = moves.map((item) =>{
        return <li key={item.move.name}>{item.move.name}</li>
    })

    return(
        <>
        {
            user ? <div className="row">
            <div className="col-lg-8 col-xl-8">
                <div className="general-container">
                    {/*═══════════════════════════ First division ═══════════════════════════ */}
                    <div className="row">
                        <div className="block-container">{/*First Cont*/}
                            <div className="col-lg-4 col-xl-4">
                                <div className="card-info">
                                    <h3>MOVES - {moves.length}</h3>
                                    <div className="container-list">
                                        {pokeMoves}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <div className="card-info">
                                    <h3 className="rigth-text">General Characteristics</h3>
                                    <ul>
                                        <li>Height:{generalChars.height}</li>
                                        <li>Weight:{generalChars.weight}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*═══════════════════════════ Second division ═══════════════════════════ */}
                    <div className="col-lg-6 col-xl-6">{/*ImagePoke Cont*/}
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
                    </div>
                    {/*═══════════════════════════ Third division ═════════════════════════════ */}
                    <div className="row">
                        <div className="block-container">{/*Second Cont*/}
                            <div className="col-lg-4 col-xl-4">
                                <div className="card-info">
                                    <h3>Abilities</h3>
                                    {pokeAbility}
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-xl-4">
                                <div className="card-info">
                                    <h3 className="rigth-text">OPTIONS</h3>
                                    <button className="button-location">Encounters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <Redirect to="/"/>
        }
        </>
    )
}

export default IndPokeCard;