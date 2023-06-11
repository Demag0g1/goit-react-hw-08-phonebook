import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { Box, Text, Button, UnorderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsFiltered = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };
  if (!contactsFiltered?.length) {
    return (
      <Box>
        {' '}
        <br />
        No contacts found ¯\_(ツ)_/¯{' '}
      </Box>
    );
  }

  return (
    <UnorderedList>
      {contactsFiltered.map(({ id, avatar, name, number }) => (
        <div key={id}>
          {/* <img
            style={{ width: '2rem', borderRadius: '50%' }}
            src={avatar}
            alt={name} 
          /> */}
          <Box
            maxW="lg"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="22px" as="b">
              <span>{name}:</span>
            </Text>
            <Text fontSize="22px" as="b">
              <span>{number}</span>
            </Text>
            <Button
              onClick={() => onDelContact(id)}
              colorScheme="red"
              size="sm"
              borderRadius="xl"
              variant="solid"
              type="button"
              my={2}
              p={3}
            >
              Delete
            </Button>
          </Box>
        </div>
      ))}
    </UnorderedList>
  );
};
export default ContactList;
