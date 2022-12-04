import {Blog} from '../components/Blog'
import { useGetBlogs } from '../hooks/get/ReadUserDataHooks'
import { useStore } from '../store/store'
import {BlogModel} from '../types/BlogTypes'

export const MyBlogs = () => {
	const currentUser = useStore((state)=>state.currentUser)
	console.log("hello")

	const {isLoading, error, data: currentUserBlogs } = useGetBlogs(currentUser)
	console.log("hello")
	// if(!currentUserBlogs) return null
	
	return(
		<>
			<p>blog</p>
			{currentUserBlogs?.map(blog=>(<Blog {...blog}/>))}
		</>
	)
}
