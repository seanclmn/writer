import { useState } from "react"
import {useParams} from 'react-router-dom'
import Texteditor from "../components/Texteditor"
import {useGetBlogById} from '../hooks/get/BlogHooks'
import {BlogModel} from '../types/BlogTypes'

const date = new Date
const newBlog: BlogModel = {
  title: "",
  author: "",
  date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
  image: "",
  id: "",
  text: "",
}

export const EditorPage = () => {
  const {editblogid}=useParams()

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
