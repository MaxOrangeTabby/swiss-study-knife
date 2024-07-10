import { Box } from "@chakra-ui/react";

import Navbar from '../navbar/navbar';
import Dashboard from "../dashboard/dashboard";
import StartPageBg from '../../images/startPageBg.svg'

function startPage() {
  return (
    <Box h={'100vh'} bgImg={StartPageBg} bgRepeat={'no-repeat'} bgPos={'contain'} bgSize={'cover'}>
        <Navbar />
        <Dashboard />
    </Box>
  )
}

export default startPage