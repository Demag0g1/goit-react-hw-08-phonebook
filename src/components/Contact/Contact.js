import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contact.module.css';
import { Button } from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {name}: {number}
      </p>
            <Button as='button' colorScheme='red' size='md' borderRadius='full' type="submit" mx={15} my={5} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};