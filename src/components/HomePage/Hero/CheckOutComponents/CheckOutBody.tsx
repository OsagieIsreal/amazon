import { Box, Flex, Heading, Text } from "@chakra-ui/react"


function CheckOutBody() {
  return (
    <Flex>
      <Box w="68%">
            <Box bg="white" p="20px">
                <Heading>Shopping Cart</Heading>
            </Box>
            <Box bg="white" p="20px"  marginTop="20px"></Box>
            <Text fontSize="18px" fontWeight="bold" marginTop="20px" color="#0F1111">
                The price and availability of items at Amazon.com are subject to change. 
                The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more 
                Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
            </Text>
      </Box>
      <Box>
        <Text fontSize="18px" fontWeight="bold" marginTop="20px" color="#0F1111">Subtotal (1 item): $34.99</Text>
      </Box>

    </Flex>
  )
}

export default CheckOutBody
