import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <Flex fontSize='20px' w='800px' justifyContent='space-around'>
      <Box>
        <Link href='/'>
          <a href=''>Home</a>
        </Link>
      </Box>
      <Box>
        <Link href='/services'>
          <a href=''>Services</a>
        </Link>
      </Box>
      <Box>
        <Link href='/products'>
          <a href=''>Products</a>
        </Link>
      </Box>
      <Box>
        <Link href='/about'>
          <a href=''>Who are we?</a>
        </Link>
      </Box>
      <Box>
        <Button colorScheme='teal' w='150px'>
          <Link href='/'>
            <a href=''>Contact us !</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
