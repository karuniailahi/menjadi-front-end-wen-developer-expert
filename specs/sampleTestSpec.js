/* eslint-disable no-undef */
const sum = (a, b) => a + b;

// eslint-disable-next-line no-undef
describe('A Sample Test for Sum', () => {
  it('should return a + b value', () => {
    expect(sum(2, 3))
      .toEqual(5);
  });
});
