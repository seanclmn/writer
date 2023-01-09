import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { signOutUser } from "../hooks/auth/AuthHooks";

export const SignoutButton = () => {

  return(
    <>
      <Button onClick={signOutUser}>
        Sign out
      </Button>
      
      <Outlet/>
    </>
  )
}
