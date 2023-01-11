import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot, setDoc, updateDoc, FieldValue, arrayUnion, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery,useMutation } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import { BlogModel } from '../../types/BlogTypes';
import {v4 as uuidv4} from 'uuid'

export const useCreateUpdateBlog = () => {
  const storeState = useStore((state)=>state)
  const createBlog = async (newBlog:BlogModel) => {
    // create blog
    const newBlogId = uuidv4()
    const blogBody = {...newBlog,id:newBlogId,author:storeState.currentUser.username,timeStamp: serverTimestamp()}
    const blogRes = await setDoc(doc(db,"blogs",newBlogId),blogBody)

    const res = await updateDoc(doc(db,"users",storeState.currentUser.id),{blogs: arrayUnion(newBlogId)})
    console.log(res)
  } 

  const {mutate, error, isLoading, data } = useMutation(async (blog:BlogModel) => {
    const result = await createBlog(blog)
    return result
  })

  const currentUser = useStore((state)=>state.currentUser)

  return {mutate,isLoading,error,data}
}
