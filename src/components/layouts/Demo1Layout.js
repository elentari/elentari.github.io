import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Container } from 'theme-ui';

import { NavigationLink } from '../NavigationLink';

export const Demo1Layout = ({ children }) => (
  <>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'navigation',
        pt: 3,
        pb: 3,
      }}
    >
      <Container>
        <Flex mx={-2} as="nav">
          <Box px={2}>
            <NextLink href="/demo1" passHref>
              <NavigationLink title="Home">Home</NavigationLink>
            </NextLink>
          </Box>
          <Box px={2}>
            <NextLink href="/cv" passHref>
              <NavigationLink title="CV">CV</NavigationLink>
            </NextLink>
          </Box>
          <Box px={2}>
            <NextLink href="/gallery" passHref>
              <NavigationLink title="Gallery">Gallery</NavigationLink>
            </NextLink>
          </Box>
          <Box px={2}>
            <NextLink href="/contact" passHref>
              <NavigationLink title="Contact">Contact</NavigationLink>
            </NextLink>
          </Box>
        </Flex>
      </Container>
    </Box>
    {children}
  </>
);
