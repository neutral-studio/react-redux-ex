import { RIMBORSA } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case RIMBORSA:
      return { ...state, [action.payload._id]: action.payload };

    default:
      return state;
  }
};
