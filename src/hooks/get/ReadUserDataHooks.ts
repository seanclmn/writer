import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import { BlogModel } from '../../types/BlogTypes';
import {User} from '../../types/AuthTypes'

export type FirebaseUser = {
  email: string
}

export const useGetUsers = () => {

  const fetchUsers = async () =>{
    const queryRef = collection(db, 'users') as CollectionReference<FirebaseUser>;
    const query =( await getDocs(queryRef)).docs.map((doc)=>doc.data())
    return query
  }

  const {isLoading,error,data}=useQuery(['users'], async ()=>{
    const result = await fetchUsers()
    return result
  })

  return {isLoading,error,data}
}

export const useGetBlogs = (user:User) => {

  const fetchBlogs = async () =>{
    console.log(user)
    console.log(`users/${user.id}/blogs`)
    const blogRef = collection(db, `users/${user.id}/blogs`) as CollectionReference<BlogModel>
    const query =( await getDocs(blogRef)).docs.map((doc)=>doc.data())
    return query
  }

  const {isLoading,error,data}=useQuery(['blogs'], async ()=>{
    const result = await fetchBlogs()
    return result
  })
  return {isLoading,error,data}
}