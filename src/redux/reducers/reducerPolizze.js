import { CREA_POLIZZA } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CREA_POLIZZA:
      return { ...state, [action.payload._id]: action.payload };

    /* {
        chiave: valore,
        chiave: valore,
        id43u2i4: {
          nome: "Leonardo viada",
          amount: 844,
          _id: "id43u2i4"
        }
      } */

    default:
      return state;
  }
};
