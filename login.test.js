const { login } = require('./login');

describe('login()', () => {
  test('đúng user và pass trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai mật khẩu trả về false', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });

  test('sai user trả về false', () => {
    expect(login('guest', '123')).toBe(false);
  });

  test('rỗng trả về false', () => {
    expect(login('', '')).toBe(false);
  });
});
