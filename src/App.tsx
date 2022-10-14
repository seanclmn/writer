import reactLogo from './assets/react.svg'
import './App.css'
import { getFirestore, collection, getDocs, getDoc, doc, CollectionReference } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db} from './firebase'

export type User = {
  username: string
}

const getUsers = async () =>{
  const queryRef = collection(db, 'users') as CollectionReference<User>;
  const query = await getDocs(queryRef)
  return query.docs.map((doc)=>doc.data())
}

function App() {

  const [users,setUsers]=useState([{}])

  useEffect(()=>{
  //  setUsers( getUsers())
   getUsers().then((data)=>setUsers(data))
  //  setUsers(getUsers.then((data)=>console.log(data)))
  },[])

  if(users.length===0) return null
  return (
    <div className="App">
      {users.map((data)=>JSON.stringify(data))}
    </div>
  )
}

export default App