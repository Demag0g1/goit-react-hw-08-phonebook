import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Box, Heading } from '@chakra-ui/react'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box maxW='4xl'>
    <Heading as='h3' size='lg' mb={5}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Heading>
    </Box>
  );
};
