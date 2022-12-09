import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';

export const useGetBlogById = (blogid:string) => {

  const fetchBlogById = async () =>{
    console.log(blogid)
    const docRef = doc(db, `blogs`,blogid)
    const query =( await getDoc(docRef)).data()
    console.log(query)
    return query
  }

  const {isLoading,error,data}=useQuery(['blogpost',blogid], async ()=>{
    const result = await fetchBlogById()
    return result
  })
  return {isLoading,error,data}
}
