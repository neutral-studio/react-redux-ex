import { combineReducers } from 'redux';

/* IMPORTIAMO I NOSTRI REDUCER */
import reducerPolizze from './reducerPolizze';
import reducerRimborsi from './reducerRimborsi';

export default combineReducers({
  polizze: reducerPolizze,
  rimborsi: reducerRimborsi,
});
