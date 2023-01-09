import { Box, Button, Container, IconButton, Menu, MenuButton, MenuItem, MenuList,Text } from "@chakra-ui/react"
import {useStore} from '../store/store'
import { faUser,faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { signOutUser } from "../hooks/auth/AuthHooks"
import { signOut } from "firebase/auth"
import { auth } from "../Firebase"

interface MenuLinkProps {
	title: string
	path: string
}

export const Header = () => {
  const navigate = useNavigate()
  const storeState = useStore((state)=>state)
	const currentUser = useStore((state)=>state.currentUser)

  const signOutHandler = async () => {
    await signOut(auth)
    navigate("/signin")
  }
  return(
    <Box className="app-container-header">
      <Text>Writer</Text>
      {storeState.loggedIn ? (
        <Container width={"auto"} mr={0}>
          <Link to="/editor/new">
            <FontAwesomeIcon icon={faPlusSquare} className="icon"/>
          </Link>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<UserMenu/>}
              variant="unstyled"
              rightIcon={<></>}>
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuLink path={`/u/${currentUser.id}`} title="My Blogs"/>
              <MenuItem onClick={signOutHandler}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Container>
      
      ):
        <Container width={200} mr={0}>
          <Link to="/signin">
            <Button>
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button>
              Sign up
            </Button>
          </Link>
        </Container>
      
      }
    </Box>
  )
}

const UserMenu = (() => (
  <>
    <FontAwesomeIcon icon={faUser} className="icon"/>
  </>
))

const MenuLink = ({path,title}:MenuLinkProps) => <Link to={path}><MenuItem>{title}</MenuItem></Link>
