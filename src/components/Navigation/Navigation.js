import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Container, Text, Box } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container mt={5}>
      <nav>
        <Text as="b" fontSize="24px" fontWeight="600" letterSpacing="wide">
          <Box mr={10}>
            <NavLink to="/">Home</NavLink>
          </Box>
          {isLoggedIn && (
            <Box>
              <NavLink to="/contacts">Contacts</NavLink>
            </Box>
          )}
        </Text>
      </nav>
    </Container>
  );
};
