
import { Box } from "@chakra-ui/react"
import Menus from "./Menus"
import HeroSection from "./HeroSection"
import SubHero from "./SubHero"
function Headers() {
  return (
    <Box>
        <Box background="tomato" width="100%" padding="4" color="white">
            <h1>Headers</h1>
        </Box>
        <Menus />
        <HeroSection />
        <SubHero />
    </Box>

  )
}

export default Headers
