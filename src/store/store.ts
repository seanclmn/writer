import create from 'zustand'
import {User} from '../types/AuthTypes'
import { BlogModel } from '../types/BlogTypes'

export const InitUser = {
  email: "",
  id: "",
  blogs: []
}

export interface AppState {
  currentUser: User;
  loggedIn: boolean | null;
  myBlogs: BlogModel[]|null;
  setCurrentUser: (user: User) => void;
  setLoggedIn: (bool: boolean) => void;
  setBlogs: (blogs: BlogModel[])=>void;
}

export const useStore = create<AppState>((set)=> ({
  currentUser: InitUser,
  loggedIn: null,
  myBlogs: null,
  setCurrentUser: (newUser) => {
    set(({
      currentUser: newUser,
      }
      ))
  },
  setLoggedIn: (bool) => {
    set(({
      loggedIn: bool
    }));
  },
  setBlogs: (blogs)=>{
    set(({
      myBlogs: blogs
    }));
  }
}))
