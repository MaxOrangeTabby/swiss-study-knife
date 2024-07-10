import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";

function dashboard() {
  return (
    <Center w={'100%'} h={'60vh'}>
        <Grid w={'90%'} h={'90%'} templateRows={'repeat(2, 1fr)'} templateColumns={'repeat(2, 1fr)'} gap={4} p={'1rem'} border={'.5rem solid white'} borderRadius={'1rem'}>
            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Box w={'125px'} h={'125px'} bg={'white'} borderRadius={'1rem'}></Box>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Box w={'125px'} h={'125px'} bg={'white'} borderRadius={'1rem'}></Box>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Box w={'125px'} h={'125px'} bg={'white'} borderRadius={'1rem'}></Box>
                </Flex>
            </GridItem>

            <GridItem>
                <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
                    <Box w={'125px'} h={'125px'} bg={'white'} borderRadius={'1rem'}></Box>
                </Flex>
            </GridItem>
        </Grid>
    </Center>
  )
}

export default dashboard