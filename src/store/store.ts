import create from 'zustand'
import {User} from '../types/AuthTypes'

export const initUser = {
  email: "",
  id: ""
}

export interface AppState {
  currentUser: User
  loggedIn: boolean | null
  setCurrentUser: (user: User) => void;
  setLoggedIn: (bool: boolean) => void;
}

export const useStore = create<AppState>((set)=> ({
  currentUser: initUser,
  loggedIn: null,
  setCurrentUser: (newUser) => {
    set(({
      currentUser: newUser, 
      }
      ))
  },
  setLoggedIn: (bool) => {
    set(({
      loggedIn: bool
    }))
  }
}))