import React from 'react'
import "./Pagination.css"

const Pagination = ({products, itemPerPage, setCurrentPage, currentPage}) => {
    
let pages = []

for(let i=1; i<=Math.ceil(products.length / itemPerPage); i++){
   pages.push(i)
    
}

const handlePage = (pge) => {
    setCurrentPage(pge)
}

let page = pages.map((p, index)=>{
    return(
         <button key={index} className={currentPage===p ? "click-btn-page" : "page-btn"} onClick={()=>handlePage(p)}>{p}</button>
    )
})
  return (
    <div>
       {page}
    </div>
  )
}

export default Pagination