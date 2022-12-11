import {Blog} from '../components/Blog'
import { useGetUserBlogs, useGetUserBlogsById } from '../hooks/get/ReadUserDataHooks'
import {useParams} from 'react-router-dom'
import { useStore } from '../store/store'
import { Box, SimpleGrid } from '@chakra-ui/react'


export const MyBlogs = () => {
	const {userid}=useParams()
	const {isLoading, error, data: currentUserBlogs } = useGetUserBlogsById(userid as string)
	if(isLoading) return(<p>Loading...</p>)
	else if(error) return(<p>Error...</p>)
	console.log(currentUserBlogs)
	return(
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
	)
}
