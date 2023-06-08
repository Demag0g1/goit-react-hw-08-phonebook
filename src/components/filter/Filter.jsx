import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contacts by name
      <br />
      <input
        className={css.input}
        onChange={evt => dispatch(setFilter(evt.target.value.trim()))}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  );
};
