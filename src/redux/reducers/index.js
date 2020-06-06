import { combineReducers } from 'redux';

/* IMPORTIAMO I NOSTRI REDUCER */
import reducerPolizze from './reducerPolizze';

export default combineReducers({
  polizze: reducerPolizze,
});
