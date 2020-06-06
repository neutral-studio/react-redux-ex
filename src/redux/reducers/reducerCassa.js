import { CREA_POLIZZA, RIMBORSA } from '../actions/types';

export default (state = 2354, action) => {
  switch (action.type) {
    case CREA_POLIZZA:
      return state + action.payload.ammontareVersato * 1;

    case RIMBORSA:
      return state - action.payload.ammontareDaRimborsare * 1;

    default:
      return state;
  }
};
