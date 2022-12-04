import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

interface MenuLinkProps {
	title: string
	path: string
}

export const Header = () => {
  return(
    <Box className="app-container-header">
      <Menu>
        <MenuButton 
          as={IconButton} 
          icon={<UserMenu/>} 
          variant="unstyled"
          rightIcon={<></>}>  
        </MenuButton>
        <MenuList>
          <MenuItem>My Profile</MenuItem>
					<MenuLink path={"/myblogs"} title="My Blogs"/>
					<MenuItem>Log Out</MenuItem>
				</MenuList>
      </Menu>
    </Box>
  )
}

const UserMenu = (() => (
  <FontAwesomeIcon icon={faUser} className="icon"/>
))

const MenuLink = ({path,title}:MenuLinkProps) => <Link to={path}><MenuItem>{title}</MenuItem></Link>