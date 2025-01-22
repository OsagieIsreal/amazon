
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import TumbNails from '../../assets/images/OIP.jpg'
import BottomTN from '../../assets/images/OIPP.jpg'




function ForthRow() {
  return (
    <Box  width="90%">
      <Flex justifyContent="space-between" width="90%" justifySelf="center" margin="20px 20px">
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">Level up you gameing <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box2 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box3 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box4 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
      </Flex>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Heading>Home Décor Under $20 <Image src={BottomTN} alt="Sample Image"></Image></Heading>        
      </Box>
    </Box>
  )
}

export default ForthRow
