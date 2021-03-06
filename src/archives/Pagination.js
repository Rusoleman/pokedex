import React from 'react'
import './Pagination.css'
const Pagination = ({pokePerPage, paginate, totalPost, currenPage}) => {
    const pageNumbers = [];

    currenPage = currenPage || 1;
    pokePerPage = pokePerPage || 10;

    for(let i = 0; i <= Math.ceil(totalPost / pokePerPage); i++) {
        pageNumbers.push(i)
    }

    let startpage; 
    let endpage;
    if(pageNumbers <= 10) {
        startpage = 1;
        endpage = pageNumbers;
    } else {
        if(currenPage <= 6) {
            startpage = 1;
            endpage = 10;
        } else if (currenPage +4 >= pageNumbers) {
            startpage = pageNumbers - 9;
            endpage = pageNumbers;
        } else {
            startpage = currenPage - 5
            endpage = currenPage + 4
        }
    }



    const page = pageNumbers.slice(startpage, endpage+1)


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
