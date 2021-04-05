import { Box, Grid, Icon, Flex, Center, Button } from "@chakra-ui/react";
import { SiAffinityphoto } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GiEyeShield } from "react-icons/gi";
import { CgTranscript } from "react-icons/cg";
function services() {
  return (
    <Grid
      templateColumns='300px 300px 300px'
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
          <Icon w={20} h={20} as={SiAffinityphoto} />
        </Box>
        <Center
          fontWeight='bold'
          fontSize='20px'
          padding='10px'
          boxShadow='5px -5px teal'
          border='2px solid #00848C'
        >
          <p>
            Need a software that surpasses photoshop and that gives more
            features with easier steps? We offer you: ReShape!
          </p>
        </Center>
        <Button colorScheme='teal'>Purchase (Free trial!)</Button>
      </Flex>
      <Flex
        justifyContent='space-around'
        flexDirection='column'
        alignItems='center'
      >
        <Box>
          <Icon w={20} h={20} as={GiEyeShield} />
        </Box>
        <Center
          fontWeight='bold'
          fontSize='20px'
          padding='10px'
          boxShadow='5px -5px teal'
          border='2px solid #00848C'
        >
          <p>
            Ever been a victim to an online fraud? Want to put an end to that?
            Then we might have exactly what you need! We offer you: sharpEye!
          </p>
        </Center>
        <Button colorScheme='teal'>Purchase (Free trial!)</Button>
      </Flex>
      <Flex
        justifyContent='space-around'
        flexDirection='column'
        alignItems='center'
      >
        <Box>
          <Icon w={20} h={20} as={CgTranscript} />
        </Box>
        <Center
          fontWeight='bold'
          fontSize='20px'
          padding='10px'
          boxShadow='5px -5px teal'
          border='2px solid #00848C'
        >
          <p>
            Got an audio and you want to transcribe it? No time to do it by
            yourself? No need to worry ! We offer you: transcribeNow!
          </p>
        </Center>
        <Button colorScheme='teal'>Purchase (Free trial!)</Button>
      </Flex>
    </Grid>
  );
}

export default services;
