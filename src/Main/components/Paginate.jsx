import React from 'react'
import{range} from 'lodash'
const Pagination=({total,currentPage,perPage,onPageChange})=>{
    const pageCount=Math.ceil( total / perPage)
    if (pageCount===1)return null;
    const pages=range(1,pageCount+1)
    return(
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class={currentPage==1?"page-item disabled":"page-item"}>
                <a class="page-link" onClick={()=>onPageChange(currentPage-1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                {pages.map(page=>(
                   

                        <li key={page} class={page===currentPage? 'page-item active':'page-item'}>
                            <a class="page-link" style={{cursor:'pointer'}} onClick={()=>onPageChange(page)}>{page}</a></li>
                ))}
                <li class={currentPage===pageCount?"page-item disabled":"page-item "}>
                
                <a class="page-link " onClick={()=>onPageChange(currentPage+1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
                </ul>
        </nav>


    )
}
export default Pagination;