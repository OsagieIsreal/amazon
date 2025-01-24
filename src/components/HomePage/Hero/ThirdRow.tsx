
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import TumbNails from '../../../assets/images/OIP.jpg'
import BottomTN from '../../../assets/images/OIPP.jpg'



function ThirdRow() {
  return (
    <Box width="90%">
      <Flex justifyContent="space-between" width="90%" justifySelf="center" margin="20px 20px">
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">toys for all ages <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box2 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box3 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
        <Box bg="white" color="black" width="20%" textAlign="center" height="20rem">box4 <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image></Box>
      </Flex>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Link fontSize="4xl" fontWeight="bold" color="White" href='checkout'>Best selling in Homes and Kitchen <Image src={BottomTN} alt="Sample Image"></Image></Link>        
      </Box>
      <Box backgroundColor="red" width="90%" display="flex" justifySelf="center" marginBottom="10px">
            <Link fontSize="4xl" fontWeight="bold" color="White" href='checkout'>Best seller in Computer & Assesories <Image src={BottomTN} alt="Sample Image"></Image></Link>
            {/* <Link bg="purple" color="red" fontSize="3xl" href='login'>click</Link>   */}
      </Box>
    </Box>
  )
}

export default ThirdRow
