// auth.smoke.test.js
const { login } = require('./auth');
describe('Smoke Test - Auth', () => {
  test('Đăng nhập đúng với admin/123 phải trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
