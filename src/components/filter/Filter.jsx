import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Box maxW="sm">
      <Stack spacing={1.5}>
        <Text fontSize={16}>Find contacts by name</Text>

        <FormControl>
          <FormLabel>
            <Input
              onChange={evt => dispatch(setFilter(evt.target.value.trim()))}
              value={filter}
              type="text"
              name="filter"
              placeholder="Start find by name..."
              htmlSize={12}
              size="lg"
            />
          </FormLabel>
        </FormControl>
      </Stack>
    </Box>
  );
};
export default Filter;
