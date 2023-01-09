import {Container,Stack, Heading } from '@chakra-ui/react'
import { useStore } from '../store/store'

export const Profile = () => {
  const storeState = useStore((state)=>state)

  return(
    <Container centerContent>
      <Stack my="10">
        <Heading mx="auto">{storeState.currentUser.username}</Heading>
      </Stack>


    </Container>
  )
}