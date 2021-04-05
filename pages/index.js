import Head from "next/head";
import {
  Box,
  Grid,
  Flex,
  Icon,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Select,
  Input,
} from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";

import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Grid justifyContent='center' templateRows='repeat(3,1fr)'>
        <Grid
          marginTop='20px'
          h='100%'
          templateColumns='380px 450px'
          gap='200px'
          justifyContent='center'
        >
          <Flex
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Box fontSize='60px' fontWeight='bold'>
              <h1>A company that does everything</h1>
            </Box>
            <Box fontSize='20px' fontWeight='bold' color='teal'>
              <p>
                We mean.. <i>EVERYTHING.</i>
              </p>
            </Box>
          </Flex>
          <Box>
            <Image
              src='/undraw_to_the_moon_v1mv.svg'
              alt='TO THE MOON !!'
              width={500}
              height={500}
            />
          </Box>
        </Grid>

        <Grid
          h='100%'
          templateColumns='repeat(3,1fr)'
          gap='40px'
          marginTop='100px'
        >
          <Flex flexDirection='column' alignItems='center'>
            <Box>
              <Icon w={20} h={20} as={CgWebsite} />
            </Box>
            <Box fontWeight='bold' marginTop='60px'>
              <p>Need a clean and professional looking website?</p>
            </Box>
            <Box marginTop='20px'>
              <p>You'll find what you're looking for here!</p>
            </Box>
          </Flex>
          <Flex flexDirection='column' alignItems='center'>
            <Box>
              <Icon w={20} h={20} as={GiArtificialIntelligence} />
            </Box>
            <Box fontWeight='bold' marginTop='60px'>
              <p>Various Artificial intelligence products!</p>
            </Box>
            <Box marginTop='20px'>
              <p>A useful series of Ai products!</p>
            </Box>
          </Flex>
          <Flex flexDirection='column' alignItems='center'>
            <Box>
              <Icon w={20} h={20} as={FcStatistics} />
            </Box>
            <Box fontWeight='bold' marginTop='60px'>
              <p>Need marketing tips for your product/service?</p>
            </Box>
            <Box marginTop='20px'>
              <p>We might have exactly what you need!</p>
            </Box>
          </Flex>
        </Grid>
        <Grid
          h='100%'
          templateColumns='repeat(2,1fr)'
          marginBottom='40px'
          bg='#F4F7F7'
          gap='80px'
          padding='20px'
        >
          <Box>
            <FormControl id='name'>
              <FormLabel>Your Name:</FormLabel>
              <Input type='text' bg='white' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Your Email address: </FormLabel>
              <Input type='email' bg='white' />
            </FormControl>
            <FormControl id='country'>
              <FormLabel>Country</FormLabel>
              <Select placeholder='Select country' bg='white'>
                <option>Morocco</option>
                <option>France</option>
                <option>Spain</option>
                <option>United States</option>
              </Select>
            </FormControl>
            <FormControl id='email' marginTop='10px'>
              <FormLabel>Your message:</FormLabel>
              <Textarea bg='white' />
            </FormControl>
            <Button colorScheme='teal' marginTop='20px'>
              Send
            </Button>
          </Box>
          <Box>
            <Image
              src='/undraw_Opened_re_i38e.svg'
              alt='TO THE MOON !!'
              width={500}
              height={500}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
