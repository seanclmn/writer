import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import { BlogModel } from '../../types/BlogTypes';


// export const useCreateBlogs = () => {
//   const currentUser = useStore((state)=>state.currentUser)

//   console.log(currentUser)

//   const fetchBlogs = async () =>{
//     const blogRef = collection(db, `users/${currentUser.id}/blogs`) as CollectionReference<BlogModel>
//     const query =( await getDocs(blogRef)).docs.map((doc)=>doc.data())
//     return query
//   }

//   const {isLoading,error,data}=useQuery(['blogs'],async ()=>{
//     const result = await fetchBlogs()
//     return result
//   })

//   return {isLoading,error,data}
// }


export const useCreateBlog = () => {
  const currentUser = useStore((state)=>state.currentUser)

  const createBlog = () => {
    
  }

  const {isLoading,error,data}=useQuery(['newblog'],async ()=>{
    const result = await createBlog()
    return result 
  })

  return {isLoading,error,data}
}