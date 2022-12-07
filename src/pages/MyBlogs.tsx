import {Blog} from '../components/Blog'
import { useGetBlogs } from '../hooks/get/ReadUserDataHooks'
import { useStore } from '../store/store'
import {BlogModel} from '../types/BlogTypes'
import { Box, SimpleGrid } from '@chakra-ui/react'


export const MyBlogs = () => {
	const currentUser = useStore((state)=>state.currentUser)
	console.log("hello")

	const {isLoading, error, data: currentUserBlogs } = useGetBlogs(currentUser)
	// if(!currentUserBlogs) return null
	const testBlogs = [
		{author: "Sean Coleman", date:"5/3/2018", title: "title", image: "https://www.visa.com.my/dam/VCOM/regional/ap/Marquees/marquee-destinations-tokyo-1600x900.jpg"},
		{author: "Sean Coleman", date:"5/3/2018", title: "title", image: "https://www.visa.com.my/dam/VCOM/regional/ap/Marquees/marquee-destinations-tokyo-1600x900.jpg"},
		{author: "Sean Coleman", date:"5/3/2018", title: "title", image: "https://www.visa.com.my/dam/VCOM/regional/ap/Marquees/marquee-destinations-tokyo-1600x900.jpg"}
	]
	
	return(
		<SimpleGrid 
			className="blogs-container" 
			columns={3} 
			spacing={10}
			m={5}
			>
			{testBlogs?.map(blog=>(
				<Box>
					<Blog {...blog}/>
				</Box>
				)
			)}
		</SimpleGrid>
	)
}
