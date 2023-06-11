import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Stack spacing={2}>
        <Text fontSize="22px" as="b">
          <FormControl>
            <FormLabel>
              Username
              <Input
                type="text"
                name="name"
                placeholder="input your name"
                autoComplete="username"
                variant="filled"
                focusBorderColor="blue.400"
                mt={2}
                mb={5}
              />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Email
              <Input
                type="email"
                name="email"
                placeholder="email"
                title="Example of valid email address: qwerty1@example.com"
                autoComplete="email"
                variant="filled"
                focusBorderColor="blue.400"
                mt={2}
                mb={5}
              />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Password
              <Input
                type="password"
                name="password"
                variant="filled"
                placeholder="enter password"
                autoComplete="current-password"
                focusBorderColor="blue.400"
                mt={2}
                mb={5}
              />
            </FormLabel>
          </FormControl>
          <Button
            colorScheme="messenger"
            size="md"
            borderRadius="lg"
            variant="solid"
            type="submit"
            my={5}
          >
            Register
          </Button>
        </Text>
      </Stack>
    </form>
  );
};
