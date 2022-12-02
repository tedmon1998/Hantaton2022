import React from 'react'
import ClassicButton from '../button/ClassicButton'

const Pagination = ({ pagesArray, changePage, page }) => {
   return (
      <div>
         {
            pagesArray.map(numberPage =>
               <ClassicButton
                  key={numberPage}
                  onClick={() => changePage(numberPage)}
                  status={page === numberPage ? true : false}>
                  {numberPage}
               </ClassicButton>
            )
         }
      </div>
   )
}

export default Pagination
