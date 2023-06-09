import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Box, Container } from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container maxW='container.sm'>
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Box as='button' borderRadius='md' bg='blue.600' color='white' px={4} h={8} onClick={() => dispatch(logOut())}>
            Logout
         </Box>
    </div>
    </Container>
  );
};