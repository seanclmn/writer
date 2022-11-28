import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { useSignOutUser } from "../hooks/auth/AuthHooks";
import { useGetBlogs, } from "../hooks/get/ReadUserDataHooks";

export const SignoutButton = () => {

  return(
    <>
      <Button onClick={useSignOutUser}>
        Sign out
      </Button>
      
      <Outlet/>
    </>
  )
}
