
import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { Link, Outlet  } from "react-router-dom";
import Menus from "./Menus";

function Headers() {
  return (
    <Box>
        <Box background="#0f1111" width="100%" padding="4" color="white">
            <Flex justifyContent='space-evenly'>
              <Box>Logo</Box>
              <Box> <Heading fontSize={8}>Deliver To Nigeria</Heading></Box>
               <Box w='85%'> <Input type="search" background='white' width='45%' ></Input></Box>
                <Box> <Heading fontSize={8}>EN</Heading></Box>
                 <Box> <Link to='login'><Text>Hello, sign in</Text></Link> </Box>
                  <Box> <Text>Return</Text> </Box>
                   <Box> <Text>Cart</Text> </Box>
            </Flex>
        </Box>
        <Menus />
        <>
        <Outlet /></>
    </Box>

  )
}

export default Headers
