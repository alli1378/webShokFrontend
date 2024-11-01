import _ from 'lodash' 
export const PaginateProduct= (Products,currentPage,prepage)=>{
    const startIndex=(currentPage - 1)*prepage
    return _(Products).slice(startIndex).take(prepage).value()
}