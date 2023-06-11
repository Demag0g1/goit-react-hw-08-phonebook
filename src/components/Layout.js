import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box
      maxW="3xl"
      borderWidth="4px"
      mt="5%"
      borderRadius="xl"
      overflow="hidden"
    >
      <Box margin="0 auto" padding="0 16px">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Box>
    </Box>
  );
};
