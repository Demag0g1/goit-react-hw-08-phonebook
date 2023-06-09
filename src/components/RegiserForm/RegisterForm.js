import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" autoComplete="username" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" title="Example of valid email address: qwerty1@example.com" autoComplete="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" autoComplete="current-password"/>
      </label>
      <Button as='button' colorScheme='messenger' size='md' borderRadius='lg' type="submit" mx="auto" my={10}>Register </Button>
    </form>
  );
};
