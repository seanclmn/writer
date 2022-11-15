import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import { Blog } from '../../types/BlogTypes';


// export const useCreateBlogs = () => {
//   const currentUser = useStore((state)=>state.currentUser)

//   console.log(currentUser)

//   const fetchBlogs = async () =>{
//     const blogRef = collection(db, `users/${currentUser.id}/blogs`) as CollectionReference<Blog>
//     const query =( await getDocs(blogRef)).docs.map((doc)=>doc.data())
//     return query
//   }

//   const {isLoading,error,data}=useQuery(['blogs'],async ()=>{
//     const result = await fetchBlogs()
//     return result
//   })

//   return {isLoading,error,data}
// }