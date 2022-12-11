import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import {Delta,Sources} from 'quill'
import 'react-quill/dist/quill.snow.css'
import {BlogModel} from '../types/BlogTypes'
import {useCreateBlog} from '../hooks/create/CreateUserDataHooks'
import { useCreateUpdateBlog } from '../hooks/create/updateCreateBlog'
import {Button} from '@chakra-ui/react'


interface TexteditorProps {
  blog: BlogModel
  // onChange: (
  //   content: string,
  //   delta: Delta,
  //   source: Sources
  // ) => void;
}

function Texteditor({blog}:TexteditorProps) {
  const [value,setValue]=useState(blog.text)



  const submitBlog = useCreateUpdateBlog

  return (
    <div >
      <ReactQuill
        theme="snow"
        preserveWhitespace={true}
        modules={{
          clipboard: {
            matchVisual: false,
          }}}
        defaultValue={blog.text}
        value={value}
        style={{height: "400px",width: "80%",marginLeft:"auto",marginRight:"auto"}}
        onChange={()=>setValue(value)}
      />

      <Button onClick={()=>submitBlog({...blog,text:value})}>Post</Button>
    </div>
  )
}

export default Texteditor
