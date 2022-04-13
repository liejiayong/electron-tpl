import Cryto from '../utils/cryto';

const from = 'JyLie',
  to = 'd6f351145a5da25d11ed643165fa13c3';

describe('matching CryptoJS', () => {
  test(`Cryto encrypt the token word : "${from}" isEqual to "${to}"`, () => {
    expect(Cryto.encrypt(from)).toBe(to);
  });

  test(`Cryto decrypt the token word : "${to}" isEqual to "${from}"`, () => {
    expect(Cryto.decrypt(to)).toBe(from);
  });
});
