import { Box, Flex, Heading } from '@chakra-ui/react'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow  from './ThirdRow'
import ForthRow  from './ForthRow'


function Hero() {
return (
<Box bg="#e2e6e6" width="100%" height="500vh">
    <Box>
    <Flex display="flex" justifySelf="center" bgGradient="linear(to-b, #7928CA 50%, #ff008000)" width="95%" height="20rem" justifyContent="center">
      <Heading color="white">Just in: new gift for the holidays</Heading>
    </Flex>
      <Box position="absolute" top="280px" width="100%" display="flex" flexDirection="column" alignItems="center" color="white">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <ForthRow />
      </Box>
  </Box>
</Box>
  
)
}

export default Hero