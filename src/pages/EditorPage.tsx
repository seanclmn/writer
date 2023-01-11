import { useState } from "react"
import {useParams} from 'react-router-dom'
import Texteditor from "../components/Texteditor"
import {useGetBlogById} from '../hooks/get/BlogHooks'
import { useStore } from "../store/store"
import {BlogModel} from '../types/BlogTypes'

import { v4 as uuidv4 } from "uuid"

export const EditorPage = () => {
  const storeState = useStore((state)=>state)
  const {editblogid}=useParams()
  const date = new Date
  const newBlog: BlogModel = {
    title: "",
    author: "",
    date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
    image: "",
    id: "",
    text: "",
    userid: storeState.currentUser.id,
    timeStamp: ""
  }
  
  if(editblogid==="new"){
    console.log(newBlog)
    return(
      <>
        <Texteditor blog={newBlog}/>
      </>
    )
  }
  else {
    const {error, isLoading, data: blog} = useGetBlogById(editblogid as string)
    if(isLoading) return <p>Loading...</p>
    if(blog===undefined||error) return <p>Error...</p>
    return(
      <>
        <Texteditor blog={blog}/>
      </>
    )
  }

}
