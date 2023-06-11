import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <Box
      display="flex"
      direction="row"
      alignItems="end"
      justifyContent="end"
      letterSpacing="wide"
      color="blue.600"
      textTransform="uppercase"
    >
      <Text as="b" fontSize="16px">
        <Box mr={15}>
          <NavLink to="/register">Register</NavLink>
        </Box>
        <Box>
          <NavLink to="/login">Log In</NavLink>
        </Box>
      </Text>
    </Box>
  );
};
