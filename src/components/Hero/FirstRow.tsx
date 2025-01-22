
import { Box, Flex, Heading } from '@chakra-ui/react'


function FirstRow() {
  return (
    <Box width="90%">
        <Flex justifyContent="space-between" width="90%" justifySelf="center">
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">Game Assesories</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box2</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box3</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box4</Box>
        </Flex>
        <Flex justifyContent="space-between" width="90%" justifySelf="center" margin="20px 20px">
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">Top catigories in kitchen applances</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box2</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box3</Box>
            <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box4</Box>
        </Flex>
        <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
                <Heading>Most Wished For Video Games</Heading>        
        </Box>
        <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
                <Heading>Top picks for nigeria</Heading>        
        </Box>
    </Box>
  )
}

export default FirstRow
