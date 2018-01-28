import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, push) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  push('/surveys');

  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  return dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
