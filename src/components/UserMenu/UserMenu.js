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
          borderRadius="xl"
          bg="messenger.600"
          color="white"
          mr={5}
          ml="60%"
          px={4}
          h={8}
          onClick={() => dispatch(logOut())}
          _hover={{ bg: '#191970' }}
          _active={{
            bg: '#000080',
            transform: 'scale(0.98)',
            borderColor: '#00008B',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};
