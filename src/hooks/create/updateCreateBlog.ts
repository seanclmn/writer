import {BlogModel} from '../../types/BlogTypes'
import {addDoc,updateDoc, doc, collection} from '@firebase/firestore'
import {db} from '../../Firebase'
import {useQuery} from '@tanstack/react-query'

export const useCreateUpdateBlog = (blog: BlogModel) => {
  const createBlog = async () => {
    const formattedBlog = {...blog,author: "test",title: "test"}
    const query = await addDoc(collection(db, "blogs"), blog);
		return query
  }

  const updateBlog = async () => {
    const query = await doc(db, "blogs",blog.id);
    const res = await updateDoc(query, {text: blog.text});
		return query
  }

  const {isLoading,error,data}=useQuery(['blogpost',blog.id], async ()=>{
    if(blog.id==="") {
      var result = await createBlog()
      return result
    }else{
      var result = await updateBlog()
      return result
    }
  })
	
	return {isLoading,error,data}
}
