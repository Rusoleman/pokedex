import React, { useEffect, useState } from 'react'
import './Pagination.css'
const Pagination = ({pokePerPage, paginate, totalPost, currentType, currenPage}) => {
    const pageNumbers = [];
    const [isPage, setIsPage] = useState(currenPage - 1)

    for(let i = 1; i <= Math.ceil(totalPost / pokePerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        if(currenPage >= 4) {
            setIsPage(currenPage - 4)
        }            
    }, [currenPage])


    const page = pageNumbers.slice(isPage, currenPage+6)


    const arr = page.map(number => {
        return<button key={number} onClick={() => paginate(number)}>{number}</button>
    })


    return (
    <div className="pagination">
        {arr}
    </div>
    )
}

export default Pagination
