import React from 'react'
import classes from './ClassicButton.module.css'


const ClassicButton = (props) => {

   return (
      <button className={classes.button} {...props} 
      style={{
         backgroundColor: props?.background?.length > 0 ? props.background : 'transparent',
         border: props?.border && props?.border === true ? 'black solid 1px' : '0px',
         color: props?.color?.length > 0 ? props.color : 'black',
         opacity: props?.blure && props?.blure === true ? '0.5' : '1',
      }}>
      </button>
   )
}

export default ClassicButton
