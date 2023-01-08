import { collection, getDocs, CollectionReference, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery,useMutation } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import { BlogModel } from '../../types/BlogTypes';
import {v4 as uuidv4} from 'uuid'

export const useCreateUpdateBlog = () => {

  const createBlog = async (newBlog:BlogModel) => {
    const body = {...newBlog,id:uuidv4()}
    await setDoc(doc(db,"blogs",newBlog.id),body)
  } 

  const {mutate, error, isLoading, data } = useMutation(async (blog:BlogModel) => {
    const result = await createBlog(blog)
    return result
  })

  const currentUser = useStore((state)=>state.currentUser)

  return {mutate,isLoading,error,data}
}
