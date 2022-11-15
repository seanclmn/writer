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
export const useSignInUser = (creds: Credentials) => {
  signInWithEmailAndPassword(auth,creds.email, creds.password).then((creds)=>{
    console.log("User signed in!",creds)
  })
}

// SIGNOUT USER
export const useSignOutUser = () => {
  signOut(auth).then(() => {
    console.log("Signed out!")
  }).catch((error) => {
    console.log(error)
  });
}

// SIGNUP USER
export const useSignUpUser = (creds: Credentials) => {

  createUserWithEmailAndPassword(auth,creds.email, creds.password).then((data)=>{
    console.log("New user created!",data)
    addDoc(collection(db, "users",data.user.uid), 
      {
        email: creds.email
      }   
    ).then((data)=>{
      console.log(data)
      
    })
    }
  )
}