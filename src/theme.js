export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#6b52ae',
    secondary: '#30c',
    muted: '#f9f9f9',
    muted2: '#f4f7fc',
    muted3: '#ebeef0',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto Condensed", sans-serif',
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
  layout: {
    container: {
      maxWidth: '1024px',
      px: 3,
    },
  },
  radii: {
    default: 4,
    circle: '50%',
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
    Main: {
      position: 'relative',
    },
  },
  links: {
    nav: {
      p: 2,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      border: '1px solid',
      borderColor: '#dfe1e5',
    },
  },
  variants: {
    fab: {
      backgroundColor: '#fff',
      color: '#757575',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 4px 8px 0 rgba(0,0,0,0.20)',
      cursor: 'pointer',
      height: '36px',
      width: '36px',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'block',
      position: 'relative',
      border: '1px solid #dfe1e5',
      zIndex: '0',
    },
  },
};
