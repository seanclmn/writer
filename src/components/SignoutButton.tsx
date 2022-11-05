import { getAuth, signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";

const auth = getAuth();

const signOutUser = () => {
  signOut(auth).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  });
}

export const SignoutButton = () => {
  

  return(
    <Button
      onClick={signOutUser}
      >
      sign out
    </Button>
  )
}