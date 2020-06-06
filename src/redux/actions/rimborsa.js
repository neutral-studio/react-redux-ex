import faker from 'faker';

import { RIMBORSA } from './types';

export default () => {
  return {
    type: RIMBORSA,
    payload: {
      nome: faker.name.findName(),
      ammontareDaRimborsare: faker.commerce.price(),
      _id: faker.random.uuid(),
    },
  };
};
