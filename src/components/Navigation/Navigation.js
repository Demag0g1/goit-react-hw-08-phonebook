import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Container, Text, Box } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container mt={5} display="flex" justifyItems="self-end">
      <Box direction="column">
        <nav>
          <Text as="b" fontSize="24px" fontWeight="600" letterSpacing="wide">
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </Text>
        </nav>
      </Box>
    </Container>
  );
};
