import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const LOG_IN = 'checkLogIn';

// axios.defaults.baseURL = 'https://6475a363e607ba4797dc38d4.mockapi.io/contacts/signup';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  window.localStorage.setItem(LOG_IN, 'true');
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
  window.localStorage.setItem(LOG_IN, 'false');
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toast.success('Successful!', { position: 'bottom-right' });
      return res.data;
    } catch (error) {
      toast.error('Try another email', { position: 'bottom-right' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error('Incorrect email or password', { position: 'bottom-right' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    try {
      await axios.post('/users/logout', user);
      toast('Good bye!', {
        icon: '🖐',
        position: 'top-right',
      });
      clearAuthHeader();
    } catch (error) {
      toast.error('An error occurred!', { position: 'bottom-right' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);