import React from 'react';
import { Container, Heading, Flex, Box, Text } from '@theme-ui/components';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Dummy } from '../components/core/Dummy';

const CVPage = () => (
  <PageLayout>
    <NextSeo title="CV" />
    <Container>
      <Dummy
        m="40px auto"
        sx={{
          width: 300,
          height: 300,
          borderRadius: 'circle',
          display: 'block',
        }}
      />
      <Heading as="h1" sx={{ fontSize: 6, textAlign: 'center', mb: 3 }}>
        Lana Medved
      </Heading>
      <Text sx={{ maxWidth: '400px', m: '0 auto', textAlign: 'center', mb: 4 }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </Text>
      <Flex py={4}>
        <Box px={4} sx={{ flexGrow: 1 }}>
          <Dummy
            mb={3}
            sx={{ width: 150, height: 150, mx: 'auto', display: 'block' }}
          />
          <Text mb={3} sx={{ textAlign: 'center' }}>
            <Dummy sx={{ width: 150 }} />
          </Text>
          <Text>
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy sx={{ width: '100%' }} />
          </Text>
        </Box>
        <Box px={4} sx={{ flexGrow: 1 }}>
          <Dummy
            mb={3}
            sx={{ width: 150, height: 150, mx: 'auto', display: 'block' }}
          />
          <Text mb={3} sx={{ textAlign: 'center' }}>
            <Dummy sx={{ width: 150 }} />
          </Text>
          <Text>
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy sx={{ width: '100%' }} />
          </Text>
        </Box>
        <Box px={4} sx={{ flexGrow: 1 }}>
          <Dummy
            mb={3}
            sx={{ width: 150, height: 150, mx: 'auto', display: 'block' }}
          />
          <Text mb={3} sx={{ textAlign: 'center' }}>
            <Dummy sx={{ width: 150 }} />
          </Text>
          <Text>
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy mb={2} sx={{ width: '100%' }} />
            <Dummy sx={{ width: '100%' }} />
          </Text>
        </Box>
      </Flex>
    </Container>
  </PageLayout>
);

export default CVPage;
