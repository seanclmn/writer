import { Fragment, ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useStore } from "../store/store"

type childrenProps = {
  children: ReactNode
}

export const PrivateRoute = ({children}: childrenProps) => {
  const currentUser = useStore(state => state.currentUser)
  return(currentUser.id.length > 0 ? <Fragment>{children}</Fragment>: (<Navigate to={"/"} />))
}

// const PrivateRoute = ({children}:childrenProps) => {
//   <Route path="/" element=
// }

