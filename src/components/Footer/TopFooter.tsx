import { Box, Heading, LinkBox } from '@chakra-ui/react'

function Footer() {
  return (
    <Box>
      <Box bg="#37475A" color="white" textAlign="center"><LinkBox>Back To Top</LinkBox></Box>
      <Box bg="#1e2f3e" color="white" textAlign="center" h="10rem"><Heading >Top Footer</Heading></Box>
    </Box>
  )
}

export default Footer
