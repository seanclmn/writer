import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {BlogModel} from '../types/BlogTypes'
import {Button, Spacer, Flex, Input,FormLabel, FormControl} from '@chakra-ui/react'
import {Controller, useForm} from 'react-hook-form'
import { useCreateUpdateBlog } from '../hooks/create/CreateUserDataHooks'

interface TexteditorProps {
  blog: BlogModel
  // onChange: (
  //   content: string,
  //   delta: Delta,
  //   source: Sources
  // ) => void;
}

interface Inputs {
  title: string
  text: string
  image: string
}

function Texteditor({blog}:TexteditorProps) {

  const {mutate:postBlog,error,isLoading,data}=useCreateUpdateBlog()

  const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>(
    {
      defaultValues: {
        title: "",
        text: "",
        image: ""
      }
    }
  );

  const submitBlog = (data:Inputs) => postBlog({...blog,text:data.text,title:data.title,image:data.image})
  return (
    <Flex 
      direction="column"
      align="center"
      width="90%" mx="auto" my="10" height="500px"
      >
      <Button 
        mt="10"
        width={"100%"}
        maxWidth={500}
        onClick={handleSubmit(submitBlog)}
      >
        Post
      </Button>
      <Spacer/>
      <FormControl
        height="400px"
        width="100%"
        >
				<FormLabel>Title</FormLabel>
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value } })=>(
            <Input 
              placeholder="Title" 
              value={value}
              mb="10"
              onChange={onChange}
            />
          )}
        />

        <FormLabel>Image</FormLabel>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value } })=>(
            <Input 
              placeholder="Image url" 
              value={value}
              mb="10"
              onChange={onChange}
            />
          )}
        />

				<FormLabel>Content</FormLabel>
				<Controller
          name="text"
          control={control}
          render={({ field: { onChange, onBlur, value } })=>(
            <ReactQuill
              theme="snow"
              preserveWhitespace={true}
              modules={{
                clipboard: {
                  matchVisual: false,
                }}}
              defaultValue={blog.text}
              value={value}
              style={{height: "100%",width: "100%",marginLeft:"auto",marginRight:"auto"}}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
          />
      </FormControl>
    </Flex>
  )
}

export default Texteditor
