import create from 'zustand'
import {User} from '../types/AuthTypes'


export const initUser = {
  email: "",
  id: ""
}

export interface AppState {
  currentUser: User
  loggedIn: boolean
  setCurrentUser: (user: User) => void;
}

export const useStore = create<AppState>((set)=> ({
  currentUser: initUser,
  loggedIn: false,
  setCurrentUser: (newUser) => {
    set(({
      currentUser: newUser, 
      }
      ))
  }
}))