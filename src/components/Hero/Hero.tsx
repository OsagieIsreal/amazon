import { Box,  Flex, Heading } from '@chakra-ui/react'
import FirstRow from './FirstRow'
import SecondRow from './FirstRow'
import ThirdRow  from './FirstRow'
import ForthRow  from './FirstRow'


function Hero() {
  return (
    <Box>
      <Flex justifySelf="center"  bg="purple" width="95%" height="20rem" justifyContent="center">
        <Heading color="white">Just in: new gift for the holidays</Heading>
        </Flex>
         <Box position="absolute" top="280px" width="100%" display="flex" flexDirection="column" alignItems="center" color="white">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <ForthRow />
    </Box>
    </Box>
  )
}

export default Hero