import faker from 'faker';

import { CREA_POLIZZA } from './types';

export default () => {
  /* ALTRE OPERAZIONI: CHIAMATE ASYNC, CALCOLI */
  return {
    type: CREA_POLIZZA,
    payload: {
      nome: faker.name.findName(),
      ammontareVersato: faker.commerce.price(),
      _id: faker.random.uuid(),
    },
  };
};
