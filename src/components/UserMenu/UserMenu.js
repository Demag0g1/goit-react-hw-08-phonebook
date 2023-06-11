import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Container, Text, Box } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container display="flex">
      <Box p={5}>
        <Text as="b" fontSize="24px">
          Welcome, {user.name}
        </Text>
        <Button
          as="button"
          borderRadius="md"
          bg="messenger.600"
          color="white"
          mr={5}
          ml="60%"
          px={4}
          h={8}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};
