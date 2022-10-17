import {useState,useEffect} from 'react'
import { collection, getDocs, getDoc, doc, CollectionReference } from 'firebase/firestore';

import { db } from '../firebase'
import { useQuery } from '@tanstack/react-query';

export type User = {
  username: string
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