import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box,Text } from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <Box  w='100%'p={4} display='flex' alignItems='baseline'  >
       <Text fontSize='2xl'>Welcome, {user.name}</Text>
      <Box as='button' borderRadius='md' bg='blue.600' color='white' px={4} h={8} onClick={() => dispatch(logOut())}>
            Logout
         </Box>
     </Box>
  );
};