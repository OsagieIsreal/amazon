import { Box } from "@chakra-ui/react"
import Headers from "../components/Header"
import CheckOutBody from "../components/HomePage/Hero/CheckOutComponents/CheckOutBody"


function CheckoutPage() {
  return (
    <Box bg="#e2e6e6" h="100vh">
      <Headers />
      <CheckOutBody />
    </Box>
  )
}

export default CheckoutPage
