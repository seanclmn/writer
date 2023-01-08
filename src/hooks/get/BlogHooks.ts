import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';
import { BlogModel } from '../../types/BlogTypes';

export const useGetBlogById = (blogid:string) => {

  const fetchBlogById = async () =>{
    console.log(blogid)
    const docRef = doc(db, `blogs`,blogid)
    const query =( await getDoc(docRef)).data()
    console.log(query)
    return query as BlogModel
  }

  const {isLoading,error,data}=useQuery(['blogpost',blogid], async ()=>{
    const result = await fetchBlogById()
    return result
  },

	{staleTime: Infinity}
	)
  return {isLoading,error,data}
}
