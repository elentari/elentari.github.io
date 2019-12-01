/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Container, NavLink } from '@theme-ui/components';

export const Footer = () => (
  <Container
    as="footer"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      p: 2,
      variant: 'styles.footer',
    }}
  >
    <Link href="/" passHref>
      <NavLink title="Home">Home</NavLink>
    </Link>
    <Link href="/cv" passHref>
      <NavLink title="CV">CV</NavLink>
    </Link>
    <Link href="/about" passHref>
      <NavLink title="About">About</NavLink>
    </Link>
    <Link href="/contact" passHref>
      <NavLink title="Contact">Contact</NavLink>
    </Link>
    <div sx={{ mx: 'auto' }} />
    <div sx={{ p: 2 }}>© 2019 Lana Medved</div>
  </Container>
);
