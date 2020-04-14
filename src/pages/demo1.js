import React from 'react';
import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Image,
} from '@theme-ui/components';
import { NextSeo } from 'next-seo';

import { Demo1Layout } from '../components/layouts/Demo1Layout';
import { Hero } from '../components/Hero';

const IndexPage = () => (
  <Demo1Layout>
    <NextSeo title="Playground" />
    <Hero backgroundImage="/images/cute-spirit-breaker-wallpaper.jpg">
      <Box sx={{ maxWidth: '260px' }}>
        <Heading
          as="h1"
          mb={1}
          sx={{ textTransform: 'uppercase', fontWeight: '900' }}
        >
          Welcome to my fantasy land
        </Heading>
        <Heading
          as="h3"
          variant="primary"
          mb={3}
          sx={{ textTransform: 'uppercase' }}
        >
          Enjoy the magic
        </Heading>
        <Flex>
          <Button sx={{ minWidth: '100px' }}>Share</Button>
          <Button variant="outline.white" ml={3} sx={{ minWidth: '80px' }}>
            More
          </Button>
        </Flex>
      </Box>
    </Hero>

    <Flex>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Image
          sx={{
            objectFit: 'cover',
            height: '200px',
            width: '100%',
            verticalAlign: 'middle',
          }}
          src="https://i.pinimg.com/originals/14/22/7d/14227da011874e0f0068e70a9c8fa8bd.jpg"
        />
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            p: 3,
          }}
        >
          <Heading as="h3" mb={2}>
            Text 1
          </Heading>
          <Button variant="secondary">See More</Button>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Image
          sx={{
            objectFit: 'cover',
            height: '200px',
            width: '100%',
            verticalAlign: 'middle',
          }}
          src="https://i.pinimg.com/originals/eb/b1/97/ebb19704a16ff59034d87bf6770106e3.jpg"
        />
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            p: 3,
          }}
        >
          <Heading as="h3" mb={2}>
            Text 1
          </Heading>
          <Button variant="secondary">See More</Button>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Image
          sx={{
            objectFit: 'cover',
            height: '200px',
            width: '100%',
            verticalAlign: 'middle',
          }}
          src="https://i.pinimg.com/originals/90/d7/b7/90d7b730aeca96e466ee25a579212500.jpg"
        />
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            p: 3,
          }}
        >
          <Heading as="h3" mb={2}>
            Text 1
          </Heading>
          <Button variant="secondary">See More</Button>
        </Box>
      </Box>
    </Flex>

    <Container></Container>
  </Demo1Layout>
);

export default IndexPage;
