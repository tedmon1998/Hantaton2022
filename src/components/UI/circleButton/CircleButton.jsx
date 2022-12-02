import React from 'react'
import classes from './CircleButton.module.css'


const CircleButton = (props) => {

   return (
      <div className={classes.curcle__button} style={{
         backgroundColor: props?.active && props?.active === true ? '#1E1E1E' : 'transparent',
      }}>
         <div className={classes.button__container__circle} style={{
         backgroundColor: props?.active && props?.active === true ? 'white' : 'rgba(0,0,0,0.35)',
      }}>
         </div>
      </div>
   )
}

export default CircleButton

// backgroundColor: props?.background?.length > 0 ? props.background : 'transparent',
//             opacity: props?.blure && props?.blure === true ? '0.5' : '1',