import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ViewIcon, TimeIcon } from '@chakra-ui/icons'
import { FaFile } from "react-icons/fa";

import { motion } from "framer-motion";

function dashboard() {
  return (
    <Center w={'100%'} h={'60vh'}>
        <Grid w={'90%'} h={'90%'} templateRows={'repeat(2, 1fr)'} templateColumns={'repeat(2, 1fr)'} gap={4} p={'1rem'} border={'.5rem solid white'} borderRadius={'1rem'}>
            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Flex as={motion.div} w={'125px'} h={'125px'} direction={'column'} justify={'center'} align={'center'} bg={'white'} borderRadius={'1rem'} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <ViewIcon boxSize={6} />
                        <Text fontFamily={'Fonarto'} textAlign={'center'}>View PDF</Text>
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Flex as={motion.div} w={'125px'} h={'125px'} direction={'column'} justify={'center'} align={'center'} bg={'white'} borderRadius={'1rem'} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <FaFile size={'1.5rem'}/>
                        <Text fontFamily={'Fonarto'} textAlign={'center'} mx={'1rem'}>Convert FIle To PDF</Text>
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Flex as={motion.div} w={'125px'} h={'125px'} direction={'column'} justify={'center'} align={'center'} bg={'white'} borderRadius={'1rem'} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>

                    </Flex>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Flex as={motion.div} w={'125px'} h={'125px'} direction={'column'} justify={'center'} align={'center'} bg={'white'} borderRadius={'1rem'} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <TimeIcon boxSize={6} />
                        <Text fontFamily={'Fonarto'} textAlign={'center'}>Timer</Text>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    </Center>
  )
}

export default dashboard