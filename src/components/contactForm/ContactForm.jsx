import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };

    const addList = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (addList) {
      return toast.error(`${contact.name} is already in contacts!`, {
        position: 'top-right',
        style: {
          background: '#E9685C',
          color: 'white',
        },
      });
    }
    dispatch(addContact(contact));
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box maxW="sm">
        <Stack spacing={3}>
          <FormControl>
            <FormLabel htmlFor={nanoid()}>Name</FormLabel>
            <Input
              type="text"
              pattern="([A-Za-z]+[\-\s]?){7,25}"
              title="Enter your first and last name"
              name="name"
              placeholder="John Dow"
              htmlSize={12}
              size="lg"
              id={nanoid()}
              minLength={3}
              required
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel htmlFor={nanoid()}>Phone number</FormLabel>
            <Input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              htmlSize={12}
              size="lg"
              id={nanoid()}
              minLength={12}
              maxLength={12}
              required
            />
          </FormControl>
        </Stack>
        <Button
          colorScheme="green"
          size="sm"
          borderRadius="lg"
          variant="solid"
          type="submit"
          my={4}
        >
          Add contact
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
