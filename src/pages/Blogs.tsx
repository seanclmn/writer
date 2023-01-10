import {Blog} from '../components/Blog'
import { useGetUserBlogs, useGetUserBlogsById, useGetUserById } from '../hooks/get/ReadUserDataHooks'
import {useParams} from 'react-router-dom'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Bars } from 'react-loading-icons'


export const MyBlogs = () => {
	const {userid}=useParams<string>()
	const {isLoading: blogsLoading, error: blogsError, data: currentUserBlogs } = useGetUserBlogsById(userid as string)
	const {isLoading:userLoading,error:userError,data: user} = useGetUserById(userid as string)

	if(blogsLoading || userLoading) return(<Bars/>)
	else if(blogsError || userError) return(<p>Error...</p>)
	console.log(user)
	return(
		<>
			<Text>{}</Text>
			<SimpleGrid
				className="blogs-container"
				minChildWidth='300px'
				spacingX='100px'
				spacingY="20px"
				mx={10}
				my={4}
				>
				{currentUserBlogs?.map(blog=>(
					<Box key={blog.id}>
						<Blog
							{...blog}
						/>
					</Box>
					)
				)}
			</SimpleGrid>
		</>
	)
}
