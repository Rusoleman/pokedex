import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Pokecard({name,url}) {
    const [isData, setIsData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(url)
                setIsData(res.data)
        }
        getData()
    }, [url])
    

    console.log(isData)
    

    
    return (
        <div>
            {isData.name}
            
           <img style={{width: "100px"}} src={`https://pokeres.bastionbot.org/images/pokemon/${isData.id}.png`} alt="image of pokemon"/>
           
        </div>
    )
}

export default Pokecard
