import { dispatch } from 'redux';
import Faker from 'faker';

import { RIMBORSA } from './types';

const faker = Faker();

export default () => {
  const action = {
    type: RIMBORSA,
    payload: {
      nome: faker.name(),
      ammontareDaRimborsare: faker.price(),
    },
  };

  dispatch(action);
};
