import React, { useContext } from 'react'
import ClassicButton from '../components/UI/button/ClassicButton'
import CircleButton from '../components/UI/circleButton/CircleButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

import DragDrop from '../components/dragDrop/DragDrop'

const Main = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext)
   const login = event => {
      event.preventDefault()
      setIsAuth(true)
      console.log(isAuth);
   }

   return (
      <div>
         <h1>Page for autherization</h1>
         <form onSubmit={login}>
            <MyInput type="text" placeholder="login" />
            <MyInput type="password" placeholder="password" />
            <ClassicButton type="submit" background="blue" color="white" blure={false}>Сохрнаить</ClassicButton>
            <CircleButton active={false} />
            <DragDrop />
         </form>
      </div>
   )
}

export default Main