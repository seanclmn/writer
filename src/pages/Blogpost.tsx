import {useGetBlogById} from '../hooks/get/BlogHooks'
import {useParams} from 'react-router-dom'

export const Blogpost = () => {
  let {blogpostid} = useParams();
  const {isLoading, error, data: blog } = useGetBlogById(blogpostid)

  if(isLoading) return <p>Loading...</p>
  else if(error) return <p>Error...</p>

  return(
    <>
      <p>{blog?.text}</p>
    </>
  )
}
