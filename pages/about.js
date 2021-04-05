import { Box, Flex } from "@chakra-ui/react";

function about() {
  return (
    <Box padding='300px'>
      <Flex
        border='2px solid black'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
      >
        <Box fontSize='40px' fontWeight='bold'>
          <p>Who are we ?</p>
        </Box>
        <Box fontWeight='bold'>
          <p>Why have different </p>
        </Box>
      </Flex>
    </Box>
  );
}

export default about;
