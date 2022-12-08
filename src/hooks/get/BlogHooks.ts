import { doc, getDocFromCache } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';

export const useGetBlogById = (blogid:string|undefined) => {

  const fetchBlogById = async () =>{
    const blogRef = doc(db, `blogs`,blogid as string)
    const query =( await getDocFromCache(blogRef)).data()
    return query
  }

  const {isLoading,error,data}=useQuery(['blogpost',blogid], async ()=>{
    const result = await fetchBlogById()
    return result
  })
  return {isLoading,error,data}
}
