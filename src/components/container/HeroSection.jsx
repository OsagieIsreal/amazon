import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function HeroSection() {
  return (
    <Box>
      <Flex justifySelf="center"  bg="linear-gradient(to bottom, blue 90%, red 90%)" width="95%" height="30rem" justifyContent="center">
        <Heading color="white">Just in: new gift for the holidays</Heading>
        </Flex>
    </Box>
  )
}

export default HeroSection;
