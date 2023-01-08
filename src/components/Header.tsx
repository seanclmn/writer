import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {useStore} from '../store/store'
import { faUser,faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useSignOutUser } from "../hooks/auth/AuthHooks"

interface MenuLinkProps {
	title: string
	path: string
}

export const Header = () => {
	const currentUser = useStore((state)=>state.currentUser)

  return(
    <Box className="app-container-header">
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
					<MenuItem onClick={useSignOutUser}>Log Out</MenuItem>
				</MenuList>
      </Menu>
    </Box>
  )
}

const UserMenu = (() => (
  <>
    <FontAwesomeIcon icon={faUser} className="icon"/>
  </>
))

const MenuLink = ({path,title}:MenuLinkProps) => <Link to={path}><MenuItem>{title}</MenuItem></Link>
