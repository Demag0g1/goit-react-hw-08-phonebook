import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </label>
      <Button as='button' colorScheme='messenger' size='md' borderRadius='lg' type="submit" mx="auto" my={10}>Log In  </Button>
    </form>
  );
};
