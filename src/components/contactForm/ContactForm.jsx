import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts,  } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';

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
      return alert(`${contact.name} is already in contacts!`);
    }
    dispatch(addContact(contact));
    evt.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nanoid()}>
        Name
        <br />
        <input
          className={css.input}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="name"
          placeholder="John Dow"
          id={nanoid()}
          required
        />
      </label>
      <br />
      <label htmlFor={nanoid()}>
        Phone number
        <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          id={nanoid()}
          required
        />
      </label>
      <br />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
