import {getAuth} from 'firebase/auth'
import { useEffect, useState } from 'react'

const auth = getAuth()

export const useGetCurrentUser = () => {
  // const fetchUser = async () => {
    
  // }

  return auth.currentUser
}