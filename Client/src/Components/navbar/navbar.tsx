import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, Text } from "@chakra-ui/react"

import NavbarBg from '../../images/navbarBg.svg'


function navbar() {
  return (
    <Flex justify={'space-between'} align={'center'} w={'100%'} h={'10vh'} bg={'white'}>
      <Text fontFamily={'Fonarto'} fontSize={'2.5em'} color={'#038373'} ml={'1.15rem'}>
        <Box as="span" color='#5F4E4E'>S</Box>wiss<Box as="span" color='#5F4E4E'>S</Box>K
      </Text>
      <HamburgerIcon boxSize={8} color={'#038373'} mr={'1.15rem'} />
    </Flex>
  )
}

export default navbar