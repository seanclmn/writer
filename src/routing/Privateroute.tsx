import { Fragment, ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useStore } from "../store/store"

type childrenProps = {
  children: ReactNode
}

export const PrivateRoute = ({children}: childrenProps) => {
  const currentUser = useStore(state => state.currentUser)
  console.log(currentUser)
  return(currentUser.email.length > 0 ? <Fragment>{children}</Fragment>: (<Navigate to={"/signin"} />))
}

