const faker = require('faker');
const _ = require('lodash');

faker.locale = 'zh_TW';

module.exports = () => ({
  people: _.times(100, n => ({
    id: n,
    name: faker.name.findName(),
    avatar: faker.internet.avatar(),
  })),
  address: _.times(100, () => ({
    id: faker.random.uuid(),
    city: faker.address.city(),
    county: faker.address.county(),
  })),
});
