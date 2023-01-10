import {
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { collection, setDoc, addDoc, doc } from 'firebase/firestore'
import { Credentials } from "../../types/AuthTypes"
import {db} from "../../Firebase"

const auth = getAuth()

// GET CURRENT USER
export const useGetCurrentUser = () => {
  return auth.currentUser
}

// SIGNIN USER
export const signInUser = (creds: Credentials) => {
  signInWithEmailAndPassword(auth,creds.email, creds.password).then((creds)=>{
    console.log("User signed in!",creds)
  })
}

// SIGNOUT USER
export const signOutUser = () => {
  signOut(auth)
}

// SIGNUP USER
export const signUpUser = (creds: Credentials) => {
  console.log(creds)
  createUserWithEmailAndPassword(auth,creds.email, creds.password).then((data)=>{
    console.log("New user created!",data)
    setDoc(doc(db,"users",data.user.uid),
      {
        email: creds.email,
        username: creds.username,
        blogs: []
      }
    ).then((data)=>{
      console.log(data)
      
    })
    }
  )
}