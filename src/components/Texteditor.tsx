import React from 'react'
import ReactQuill from 'react-quill'
import {Delta,Sources} from 'quill'
import 'react-quill/dist/quill.snow.css'


interface TexteditorProps {
  value: string
  defaultValue: string
  // onChange: (
  //   content: string,
  //   delta: Delta,
  //   source: Sources
  // ) => void;
}

function Texteditor({value,defaultValue}:TexteditorProps) {
  return (
    <ReactQuill 
      theme="snow" 
      preserveWhitespace={true}
      modules={{
        clipboard: {
          matchVisual: false,
        }}}
      defaultValue={defaultValue} 
      value={value} 
      // onChange={onChange}
    />
  )
}

export default Texteditor
