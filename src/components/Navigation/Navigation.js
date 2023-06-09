import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Container,Box  } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box maxW='32rem'>
    <nav>
      <Container maxW="container.sm">
        <NavLink  to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink  to="/contacts">
            Contacts
          </NavLink>
        )}
      </Container>
    </nav>
    </Box>
  );
};
