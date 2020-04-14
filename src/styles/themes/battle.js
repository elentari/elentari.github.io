import { darken, alpha, saturate } from '@theme-ui/color';

export default {
  colors: {
    text: '#ffffff',
    textInverted: '#101012',
    background: '#101012',
    primary: '#DC3F7C',
    secondary: '#ffa053',
    muted: '#f9f9f9',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: {
    default: 4,
    circle: '50%',
  },
  zIndices: {
    navigation: 1000,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      bg: 'muted3',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  layout: {
    container: {
      maxWidth: '1024px',
      px: 3,
    },
  },
  links: {
    nav: {
      p: 2,
      textTransform: 'uppercase',
      ':hover, &[aria-current="page"]': {
        color: saturate('primary', 1),
        bg: alpha('primary', 0.2),
        borderRadius: 'default',
      },
    },
  },
  text: {
    primary: {
      color: 'primary',
    },
  },
  cards: {},
  buttons: {
    primary: {
      color: 'textInverted',
      textTransform: 'uppercase',
      fontSize: 0,
      fontWeight: 'heading',
      bg: 'primary',
      borderRadius: 0,
      cursor: 'pointer',
      py: 2,
      '&:hover': {
        bg: darken('primary', 0.1),
      },
      '&:active': {
        bg: darken('primary', 0.15),
      },
    },
    secondary: {
      color: 'textInverted',
      textTransform: 'uppercase',
      fontSize: 0,
      fontWeight: 'heading',
      bg: 'secondary',
      borderRadius: 0,
      cursor: 'pointer',
      py: 2,
      '&:hover': {
        bg: darken('secondary', 0.1),
      },
      '&:active': {
        bg: darken('secondary', 0.15),
      },
    },
    outline: {
      white: {
        color: 'text',
        textTransform: 'uppercase',
        fontSize: 0,
        fontWeight: 'heading',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 0,
        cursor: 'pointer',
        py: 2,
        '&:hover': {
          color: 'textInverted',
          bg: 'text',
        },
        '&:active': {
          color: 'textInverted',
          bg: darken('text', 0.1),
          borderColor: darken('text', 0.1),
        },
      },
    },
  },
  variants: {},
};
