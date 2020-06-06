import { dispatch } from 'redux';
import Faker from 'faker';

import { CREA_POLIZZA } from './types';

const faker = Faker();

export default () => {
  /* ALTRE OPERAZIONI: CHIAMATE ASYNC, CALCOLI */
  const action = {
    type: CREA_POLIZZA,
    payload: {
      nome: faker.name(),
      ammontareVersato: faker.price(),
      _id: faker.uuid(),
    },
  };
  dispatch(action);
};
