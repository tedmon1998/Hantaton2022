import React, { useState } from 'react'
import ClassicButton from './UI/button/ClassicButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create, id }) => {
   const [post, setPost] = useState({ title: '', content: '' })


   const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
         id: (id + 1), ...post
      }
      create(newPost)
      setPost({ title: '', content: '' })
   }

   return (

      <form>
         <MyInput type="text" placeholder="Название поста"
            value={post.title} onChange={e => { setPost({ ...post, title: e.target.value }) }} />

         <MyInput type="text" placeholder="Описание поста"
            value={post.content} onChange={e => { setPost({ ...post, content: e.target.value }) }} />

         <ClassicButton onClick={addNewPost}>Создать пост</ClassicButton>
      </form>
   )
}

export default PostForm
