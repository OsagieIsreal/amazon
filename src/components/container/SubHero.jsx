import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import FirstRow from './HeroComponents/FirstRow'
import SecondRow from './HeroComponents/SecondRow'
import ThirdRow from './HeroComponents/ThirdRow'
import ForthRow from './HeroComponents/ForthRow'

function SubHero() {
  return (
    <>
    <Box position="absolute" top="280px" width="100%" display="flex" flexDirection="column" alignItems="center" color="white">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <ForthRow />
    </Box>

    </>
  )
}

export default SubHero
