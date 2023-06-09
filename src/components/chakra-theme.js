import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  flex:{
    flex: 'flex',
    justify:'center',
    alignItems:'center',
  },
  padding:{
    padding: '15px',
  },
  fontSizes: {
    lg: '24px',
  },
  fontWeights:{
    lg: 700,
  },
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
  layerStyles: {
    base: {
      bg: 'gray.50',
      border: '2px solid',
      borderColor: 'gray.500',
    },
    selected: {
      bg: 'teal.500',
      color: 'teal.700',
      borderColor: 'orange.500',
    },
  },
 
});

export default theme;