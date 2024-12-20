const { givenLogInAsStandardUser } = require('../support/logIn');

describe('template spec', () => {
  it('passes', () => {
    givenLogInAsStandardUser();
  });
});
