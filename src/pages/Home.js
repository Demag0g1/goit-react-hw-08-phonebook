import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      minHeight="calc(100vh - 500px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="b" fontSize="4xl" textAlign="center">
        Hello!
        <br />
        Welcome to you Phonebook{' '}
      </Text>
    </Box>
  );
}
