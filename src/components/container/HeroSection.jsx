import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function HeroSection() {
  return (
    <Box>
      <Flex justifySelf="center" bg="linear-gradient(rgba(0,0,255,0.347)), rgba(0,23,0,0.43)"  width="95%" height="30rem" justifyContent="center">
        <Heading color="white">Just in: new gift for the holidays</Heading>
        </Flex>
    </Box>
  )
}

export default HeroSection;
