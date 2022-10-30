import { collection, getDocs, CollectionReference } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';

export type User = {
  email: string
}

export const useGetUsers = () => {

  const fetchUsers = async () =>{
    const queryRef = collection(db, 'users') as CollectionReference<User>;
    const query =( await getDocs(queryRef)).docs.map((doc)=>doc.data())
    return query
  }

  const {isLoading,error,data}=useQuery(['data'],async ()=>{
    const result = await fetchUsers()
    return result
  })

  return {isLoading,error,data}
}