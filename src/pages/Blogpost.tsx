import {useGetBlogById} from '../hooks/get/BlogHooks'
import {useParams} from 'react-router-dom'

import { Heading, Container, Stack, Image } from '@chakra-ui/react'


export const Blogpost = () => {
  let {blogpostid} = useParams();
  const {isLoading, error, data: blog } = useGetBlogById(blogpostid as string)

  if(isLoading) return <p>Loading...</p>
  else if(error || blog===undefined) return <p>Error...</p>

  return(
    <Container centerContent>
      <Stack my="10">
        <Heading mx="auto">{blog.title}</Heading>
        <Heading mx="auto" size="md" >By {blog.author} ({blog.date})</Heading>
      </Stack>

      <Image src={blog.image} alt={`b-image-${blog.id}`} />

      <Stack mt="10" w="100%">
        <p dangerouslySetInnerHTML={{__html: blog.text}}></p>
      </Stack>
    </Container>
  )
}
