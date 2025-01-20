
import { Box, Flex, Heading } from '@chakra-ui/react'


function FirstRow() {
  return (
    <Box width="90%">
      <Flex justifyContent="space-between" width="90%" justifySelf="center" margin="20px 20px">
        <Box bg="gray" width="20%" textAlign="center" height="20rem">toys for all ages</Box>
        <Box bg="gray" width="20%" textAlign="center" height="20rem">box2</Box>
        <Box bg="gray" width="20%" textAlign="center" height="20rem">box3</Box>
        <Box bg="gray" width="20%" textAlign="center" height="20rem">box4</Box>
      </Flex>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Heading>Best selling in Homes and Kitchen</Heading>        
      </Box>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Heading>Best seller in Computer & Assesories</Heading>        
      </Box>
    </Box>
  )
}

export default FirstRow
