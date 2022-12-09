import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot, where, query } from 'firebase/firestore';
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

export const useGetUserBlogs = (user:User) => {

  const fetchBlogs = async () =>{
    const blogsRef = collection(db,'blogs')
    const q = query(blogsRef, where("userid", "==", user.id));
    const queryresult =( await getDocs(q)).docs.map((doc)=>doc.data())
    return queryresult
  }

  const {isLoading,error,data}=useQuery(['userblogs'], async ()=>{
    const result = await fetchBlogs()
    return result
  })
  return {isLoading,error,data}
}

export const useGetUserBlogsById = (userid:string) => {
  const fetchBlogs = async () => {
    const blogsRef = collection(db,'blogs')
    const q = query(blogsRef, where("userid", "==", userid));
    const queryresult =( await getDocs(q)).docs.map((doc)=>doc.data())
    return queryresult
  }
  const {isLoading,error,data}=useQuery(['userblogs'], async ()=>{
    const result = await fetchBlogs()
    return result
  })
  return {isLoading,error,data}
}
