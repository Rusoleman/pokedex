import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PokeCardName = ({data}) => {
    const [isType,setType]= useState([]);
    const [hp, setHp] = useState({})
    const [speed, setSpeed] = useState({})
    const[defense, setDefense] = useState({})
    const[attack, setAttack] = useState({})

    useEffect(() => {
        if(data.stats) {
            setType(data.types)
            setHp({
                name: data.stats[0].stat.name,
                base: data.stats[0].base_stat
            })
            setSpeed({
                name: data.stats[5].stat.name,
                base: data.stats[5].base_stat
            })
            setDefense({
                name: data.stats[2].stat.name,
                base: data.stats[2].base_stat
            })
            setAttack({
                name: data.stats[1].stat.name,
                base: data.stats[1].base_stat
            })
        }
    }, [data])

    const mapType = isType.map((value) =>{
        return <span key={value.type.name}>{value.type.name}</span>
    })

    return (

        <div className="poke-card">
            <div className="header-poke">
                <div className="header-img">
                    <div>{mapType}</div>
                    <img style={{width: "150px"}} src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} alt="pokemon"/>
                </div>
                <h2>{data.name}</h2>
                <span className="poke-id"># {data.id}</span>
            </div>
            <div className="stats-poke">
                <p><span>{hp.name}:</span>  {hp.base}</p>
                <p><span>{speed.name}:</span>  {speed.base}</p>
                <p><span>{defense.name}:</span>  {defense.base}</p>
                <p><span>{attack.name}:</span>  {attack.base}</p>
            </div>
            <Link to={`/thisPokemon/${data.id}`}>Ecounters --</Link>
         </div>
    )
}

export default PokeCardName
