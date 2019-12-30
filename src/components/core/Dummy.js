import React, { forwardRef } from 'react';
import { keyframes, css } from '@emotion/core';
import { Box } from '@theme-ui/components';

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

export const Dummy = forwardRef((props, ref) => (
  <Box
    as="span"
    ref={ref}
    css={css`
      background: linear-gradient(
        -90deg,
        #efefef 0%,
        #fcfcfc 50%,
        #efefef 100%
      );
      background-size: 400% 400%;
      animation: ${pulse} 1.2s ease-in-out infinite;
    `}
    __css={{
      backgroundColor: 'lightGray',
      height: 'inherit',
      borderRadius: 'default',
      display: 'inline-block',
      lineHeight: 'inherit',
      verticalAlign: 'middle',
    }}
    {...props}
  >
    &nbsp;
  </Box>
));
