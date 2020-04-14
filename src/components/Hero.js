import { Box, Container } from 'theme-ui';

export const Hero = ({ backgroundImage, children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: '80px',
        height: '495px',
        ':before': {
          display: 'block',
          content: '""',
          bg: '#7a00b9',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          mixBlendMode: 'soft-light',
          zIndex: 0,
          opacity: 0.4,
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          height: '100%',
          zIndex: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
