import {Blog} from '../components/Blog'
import { useGetBlogs } from '../hooks/get/ReadUserDataHooks'
import { useStore } from '../store/store'
import {BlogModel} from '../types/BlogTypes'



export const MyBlogs = () => {
	const currentUser = useStore((state)=>state.currentUser)

	const {isLoading, error, data: currentUserBlogs } = useGetBlogs(currentUser)

	// if(!currentUserBlogs) return null
	
	return(
		<>
			<p>blogs</p>
			{currentUserBlogs?.map(blog=>(<Blog {...blog}/>))}
		</>
	)
}
