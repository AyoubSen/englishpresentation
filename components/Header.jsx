import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
function Header() {
  return (
    <Flex
      alignItems='center'
      fontSize='30px'
      fontWeight='bold'
      justifyContent='space-around'
    >
      <Box>
        <h1>BestCompany!</h1>
      </Box>
      <Navbar />
    </Flex>
  );
}

export default Header;
