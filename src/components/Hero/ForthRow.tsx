
import { Box, Flex, Heading } from '@chakra-ui/react'


function ForthRow() {
  return (
    <Box  width="90%">
      <Flex justifyContent="space-between" width="90%" justifySelf="center" margin="20px 20px">
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">Level up you gameing</Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box2</Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box3</Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box4</Box>
      </Flex>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Heading>Home Décor Under $20</Heading>        
      </Box>
    </Box>
  )
}

export default ForthRow
