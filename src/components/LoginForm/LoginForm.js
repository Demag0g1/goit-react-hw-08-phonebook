import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Input, FormControl, FormLabel, Stack } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <FormControl>
          <FormLabel>
            Email
            <Input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="email"
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
              autoComplete="current-password"
              placeholder="enter password"
              variant="filled"
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
          Log In
        </Button>
      </Stack>
    </form>
  );
};
