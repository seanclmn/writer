import { SignoutButton } from "../components/SignoutButton"
import "./ContainerStyles.css"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Header} from '../components/Header'
import { Outlet } from "react-router-dom";
export const AppContainer = () => (
    <>
      <Header/>
      <div style={{"paddingTop": "50px"}}>
        <Outlet/>
      </div>
    </>
  )
