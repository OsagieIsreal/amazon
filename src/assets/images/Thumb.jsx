import TumbNails from '../../assets/images/OIP.jpg'
import { Image } from '@chakra-ui/react'

function Thumb() {
  return (
    <div>
        <Image src={TumbNails} alt="Sample Image" objectFit="cover" w="full"></Image>    
    </div>
  )
}

export default Thumb
