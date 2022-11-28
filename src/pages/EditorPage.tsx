import { useState } from "react"
import Texteditor from "../components/Texteditor"
import { useGetBlogs } from "../hooks/get/ReadUserDataHooks"

export const EditorPage = () => {
  const [value]=useState("")
  return(
    <>
      <p>editor page</p>
      <Texteditor value={"test"} defaultValue=""/>
    </>  
  )
}
