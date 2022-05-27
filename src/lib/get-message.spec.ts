import getMessage from './get-message';

describe('getMessage()', () => {
  it('should return non-empty string', () => {
    expect(getMessage()).toBeTruthy();
  });
});
