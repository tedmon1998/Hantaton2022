import React from 'react'
import ClassicButton from './UI/button/ClassicButton'
import { useNavigate } from 'react-router-dom'


const PostItem = (props) => {
   // console.log(props.remove(props.post.id));

   const navigate = useNavigate()

   return (
      <div className="container">
         <div className="post">
            <div className="post__content">
               {/* <strong>{props.number + 1} {props.post.title}</strong> */}
               <strong>{props.post.id} {props.post.title}</strong>
               <div>
                  {props.post.content}
               </div>
            </div>
            <div className="post__btns">
               <ClassicButton onClick={() => props.remove(navigate(`/posts/${props.post.id}`))} >Открыть</ClassicButton>
               <ClassicButton onClick={() => props.remove(props.post.id)} >Удалить</ClassicButton>
            </div>
         </div>
      </div>
   )
}

export default PostItem