import { Box, Flex } from "@chakra-ui/react";

function about() {
  return (
    <Box padding='100px' maxW='900px' margin='0 auto'>
      <Flex justifyContent='center' flexDirection='column' alignItems='center'>
        <Box fontSize='40px' fontWeight='bold'>
          <p>Who are we ?</p>
        </Box>
        <Box fontWeight='bold'>
          <p>
            an IT company dedicated to providing the best services to it's
            customers ranging from image doctoring to cyber security. We use
            cutting edge technology carefully crafted by professionals with the
            highest standards such as AI robotics to meet your demands in the
            most satusfying manner possible.
          </p>
        </Box>
      </Flex>
    </Box>
  );
}

export default about;
