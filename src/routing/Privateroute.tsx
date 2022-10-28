import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useStore } from "../store/store"

type childrenProps = {
  children: ReactNode
}

const PrivateRouteComponent = ({children}: childrenProps) => {
  const currentUser = useStore(state => state.currentUser)
  return currentUser.id.length > 0 ? children: (<Navigate to={"/signin"} />)
}

const PrivateRoute = ({children}:childrenProps) => {
  <Route path="/" element=
}

export default PrivateRoute