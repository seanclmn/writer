import create from 'zustand'

export interface User {
  username: string
  id: string
}
export const initUser = {
  username: "",
  id: ""
}

export interface AppState {
  currentUser: User
  setCurrentUser: (user: User) => void;
}

export const useStore = create<AppState>((set)=> ({
  currentUser: initUser,
  setCurrentUser: (currentUser) => set({currentUser})
}))