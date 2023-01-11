import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useBlogToExplore } from "../hooks/get/BlogHooks"

// Components
import {Blog} from '../components/Blog'
import { BlogModel } from "../types/BlogTypes"

export const Home = () => {

  const [currentPage,setCurrentPage]=useState(1)

  const { status, data, error, isLoading } = useBlogToExplore(currentPage)

  if(error) return <p>error</p>
  if(isLoading) return <p>Loading...</p>
  console.log(data)
  return(
    <Container>
      <Heading textAlign={"center"}>Explore</Heading>
      <SimpleGrid
				className="blogs-container"
				minChildWidth='300px'
				spacingX='100px'
				spacingY="20px"
				mx={10}
				my={4}
				>
        {data?.map(blog=><Box key={blog.id}> <Blog {...blog}/> </Box>)}
      </SimpleGrid>
    </Container>
  )
}