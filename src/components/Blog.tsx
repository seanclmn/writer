import {BlogModel} from '../types/BlogTypes'

export const Blog = (blogData:BlogModel) => {
	return(
		<div>
			<p>{blogData.author}</p>
			<p>{blogData.date}</p>
		</div>
	)
}
