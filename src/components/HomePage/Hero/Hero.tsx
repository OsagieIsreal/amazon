import { Box, Flex, Image } from '@chakra-ui/react'
import BackDrop from '../../../assets/images/bg.jpg'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow  from './ThirdRow'
import ForthRow  from './ForthRow'


function Hero() {
return (
<Box bg="#e2e6e6" width="100%" h="485vh">
<Box position="relative">
      {/* Image */}
      <Image
        src={BackDrop}
        alt="Sample Image"
        objectFit="cover"
        w="full"
        h="full"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="full"
        bgGradient="linear(to-b, transparent 30%, #e2e6e6 100%)"
        pointerEvents="none"
      />
    </Box>


      <Flex>
      </Flex>
         <Box position="absolute" top="350px" width="100%" display="flex" flexDirection="column" alignItems="center" color="white">
            <FirstRow />
            <SecondRow />
            <ThirdRow />
            <ForthRow />
        </Box>
    </Box>
// </Box>
  
)
}

export default Hero

// justifySelf="center" 
      // bgGradient="linear(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)" 
      // bgImage={BackDrop} 
      // bgPosition="center" 
      // bgRepeat="no-repeat" 
      // bgSize="cover" 
      // width="95%" 
      // height="35rem" 
      // justifyContent="center"