import {Blog} from '../components/Blog'
import { useGetUserBlogs } from '../hooks/get/ReadUserDataHooks'
import { useStore } from '../store/store'
import { Box, SimpleGrid } from '@chakra-ui/react'


export const MyBlogs = () => {
	const currentUser = useStore((state)=>state.currentUser)
	const {isLoading, error, data: currentUserBlogs } = useGetUserBlogs(currentUser)
	console.log(currentUserBlogs)
	// return(<p>test</p>)
	if(isLoading) return(<p>Loading...</p>)
	else if(error) return(<p>Error...</p>)
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
				<Box>
					<Blog
						{...blog}
					/>
				</Box>
				)
			)}
		</SimpleGrid>
	)
}
