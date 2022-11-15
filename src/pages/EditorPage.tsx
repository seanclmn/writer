import { useState } from "react"
import Texteditor from "../components/Texteditor"
import { useGetBlogs } from "../hooks/get/ReadUserDataHooks"

export const EditorPage = () => {
  const [value,setValue]=useState("")
  return(
    <div>
      <p>editor page</p>
      <Texteditor value={value} defaultValue=""/>
    </div>  
  )
}