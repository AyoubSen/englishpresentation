import { Box, Grid, Icon, Flex, Center, Button } from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { SiAffinityphoto } from "react-icons/si";
import { FcStatistics } from "react-icons/fc";
function services() {
  return (
    <Grid
      templateColumns='300px 300px'
      justifyContent='center'
      padding='100px'
      rowGap='50px'
      columnGap='50px'
    >
      <Flex
        justifyContent='space-around'
        flexDirection='column'
        alignItems='center'
      >
        <Box>
          <Icon w={20} h={20} as={CgWebsite} />
        </Box>
        <Center
          fontWeight='bold'
          fontSize='20px'
          padding='10px'
          boxShadow='5px -5px teal'
          border='2px solid #00848C'
        >
          <p>
            Need a business website? a portfolio ? a learning website? an
            ecommerce website? we ll make it. So why don't you join us right
            away!
          </p>
        </Center>
        <Button colorScheme='teal'>Purchase (starting from 500$!)</Button>
      </Flex>

      <Flex
        justifyContent='space-around'
        flexDirection='column'
        alignItems='center'
      >
        <Box>
          <Icon w={20} h={20} as={FcStatistics} />
        </Box>
        <Center
          fontWeight='bold'
          fontSize='20px'
          padding='10px'
          boxShadow='5px -5px teal'
          border='2px solid #00848C'
        >
          <p>
            Need Marketing tips to make your product successful? We offer you
            our marketing service! with various strategies, success will be
            guaranteed
          </p>
        </Center>
        <Button colorScheme='teal'>Purchase (300$)</Button>
      </Flex>
    </Grid>
  );
}

export default services;
