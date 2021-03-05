import React, { useEffect, useState } from 'react';
import './PokeList.css';

import {Link} from 'react-router-dom';
import axios from 'axios';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


function Pokecard({url}) {
    const [isData, setIsData] = useState([]);
    const [isType,setType]= useState([]);
    const [hp, setHp] = useState({})
    const [speed, setSpeed] = useState({})
    const[defense, setDefense] = useState({})
    const[attack, setAttack] = useState({})

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(url)
                setIsData(res.data)
                setType(res.data.types)
                setHp({
                    name: res.data.stats[0].stat.name,
                    base: res.data.stats[0].base_stat
                })
                setSpeed({
                    name: res.data.stats[5].stat.name,
                    base: res.data.stats[5].base_stat
                })
                setDefense({
                    name: res.data.stats[2].stat.name,
                    base: res.data.stats[2].base_stat
                })
                setAttack({
                    name: res.data.stats[1].stat.name,
                    base: res.data.stats[1].base_stat
                })
        }
        getData()
    }, [url])


    const mapType = isType.map((value) =>{
        return <span key={value.type.name}>{value.type.name}</span>
    })
    
    return (
        <>
         <div className="poke-card">
            <div className="header-poke">
                <div className="header-img">
                    <div>{mapType}</div>
                    <img style={{width: "150px"}} src={`https://pokeres.bastionbot.org/images/pokemon/${isData.id}.png`} alt="pokemon"/>
                </div>
                <h2>{isData.name}</h2>
                <span className="poke-id"># {isData.id}</span>
            </div>
            <div className="stats-poke">
                <p><span>{hp.name}:</span>  {hp.base}</p>
                <p><span>{speed.name}:</span>  {speed.base}</p>
                <p><span>{defense.name}:</span>  {defense.base}</p>
                <p><span>{attack.name}:</span>  {attack.base}</p>
            </div>
            <Link to={`/pokedex/pokemon/${isData.id}`}><ArrowRightAltIcon fontSize="large"/></Link>
         </div>
        </>
    )
}

export default Pokecard;
