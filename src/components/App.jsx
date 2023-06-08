// import { ContactForm } from './contactForm/ContactForm';
// import { ContactList } from './contactList/ContactList';
// import { Filter } from './filter/Filter';
import { useEffect, lazy } from "react";
import { useDispatch, } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));




export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

//   return (
//     <section className={css.container}>
    
//       <ContactForm />

//       <section>
//         <Filter />
    
//         <ContactList />
//         {isLoading && !error && <b>Request in progress...</b>}
//       </section>
//     </section>
//   );
// };
return isRefreshing ? (
  <b>Refreshing user...</b>
) : (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
        }
      />
      <Route
        path="/phonebook"
        element={
          <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
        }
      />
    </Route>
  </Routes>
);
};
