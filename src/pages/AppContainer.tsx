import { SignoutButton } from "../components/SignoutButton"
import "./ContainerStyles.css"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Box} from "@chakra-ui/react"

export const AppContainer = () => {

  return(
    <div>
      <Header/>
    </div>
  )
}

const Header = () => {
  return(
    <Box className="app-container-header">
      <Box>
        <SignoutButton/>
        <FontAwesomeIcon icon={faUser}/> 
      </Box>
    </Box>
  )
}