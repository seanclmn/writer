import { Component, Fragment, ReactNode } from "react"
import { Navigate, Route } from "react-router-dom"
import { useStore } from "../store/store"

type childrenProps = {
  children: ReactNode
}

export const PrivateRoute = ({children}: childrenProps) => {
  const currentUser = useStore(state => state.currentUser)
  const loggedIn = useStore(state => state.loggedIn)
  return(loggedIn ? <Fragment>{children}</Fragment>: (<Navigate to={"/signin"} />))
}