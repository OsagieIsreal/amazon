import { Box, Flex, Heading, Text, Input, InputGroup, InputRightElement, IconButton, Select } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Link, Outlet  } from "react-router-dom";
// import { LuSearch } from '/lu'
import Menus from "./Menus";
import AmazonIcon from "./icons/AmazonIcon";


function Headers() {
  return (
    
<Box>
  <Box background="#0f1111" width="100%" padding="4" color="white">
    <Flex position="static" float="none" flex-flow= "row nowrap" height= "60px" alignItems="center" justifyContent="space-between" >
      <Box><AmazonIcon /></Box>
      <Box> <Heading fontSize={8}>Deliver To Nigeria</Heading></Box>
        <InputGroup  width="30rem" paddingLeft="25px">
          <Select variant="filled" placeholder="select option" minWidth="5rem" width="5%" padding="0" borderRadius="none">
            <option value='option1'>Select option</option>
            <option value='option2'>Option 1</option>
            <option value='option3'>Option 2</option>
            <option value='option3'>Option 3</option>
            <option value='option3'>Option 4</option>
            <option value='option3'>Option 5</option>
          </Select>
        <Input type="text" placeholder="Search" borderRadius="none"/>
          <InputRightElement>
            <IconButton borderRadius="none" aria-label='Search database' icon={<SearchIcon />} />
          </InputRightElement>
          </InputGroup>
            <Box> <Heading fontSize={8}>EN</Heading></Box>
              <Box> <Link to='login'><Text>Hello, sign in</Text></Link> </Box>
                <Box> <Text>Return</Text> </Box>
                <Box> <Text>Cart</Text> </Box>
      </Flex>

  </Box>
        <Menus />
        <Outlet />
</Box>

  )
}

export default Headers
