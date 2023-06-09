import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Button, Box, Text, Stack,SimpleGrid  } from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Box maxW="32rem" align='center' justifyContent='space-around' py={8}>
      <Stack spacing={4} direction="column">
      <SimpleGrid columns={2} spacing={10}>
      <Box  height='20px'>
        <Text fontSize="md">
          {name}: {number}
        </Text>
        </Box>
        <Box height='20px'>
        <Button
          colorScheme="red"
          size="sm"
          borderRadius="lg"
          type="submit"
          mx={15}
          my={5}
          onClick={handleDelete}
        >
          Delete
        </Button>
        </Box>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};
