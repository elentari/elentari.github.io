import React, { Children, forwardRef } from 'react';
import { Box, Divider } from 'theme-ui';

const validStackComponents = ['div', 'ol', 'ul'];

const alignDictionary = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const Stack = forwardRef(
  (
    {
      as = 'div',
      children,
      spacing,
      align = 'left',
      dividers = false,
      ...rest
    },
    ref
  ) => {
    if (
      process.env.NODE_ENV === 'development' &&
      !validStackComponents.includes(as)
    ) {
      throw new Error(`Invalid Stack component: ${as}`);
    }

    const stackItems = Children.toArray(children);

    const isList = as === 'ol' || as === 'ul';
    const stackItemComponent = isList ? 'li' : 'div';

    return (
      <Box ref={ref} as={as} {...rest}>
        {stackItems.map((child, index) => (
          <Box
            as={stackItemComponent}
            key={index}
            sx={
              !dividers
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: alignDictionary[align],
                    pb: spacing,
                    '&:last-of-type': {
                      pb: 0,
                    },
                  }
                : undefined
            }
          >
            {dividers && index > 0 ? (
              <Box sx={{ py: spacing, width: '100%' }}>
                <Divider />
              </Box>
            ) : null}
            {child}
          </Box>
        ))}
      </Box>
    );
  }
);
