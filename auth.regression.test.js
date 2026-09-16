// auth.regression.test.js
const { login } = require('./auth');
describe('Regression Test - Auth Exceptions', () => {
  // Trường hợp mật khẩu sai
  test('Mật khẩu sai phải trả về false', () => {
    expect(login('admin', 'sai_mat_khau')).toBe(false);
  });
  // Trường hợp username rỗng
  test('Username rỗng phải trả về false', () => {
    expect(login('', '123')).toBe(false);
  });
  test('Username chỉ chứa khoảng trắng phải trả về false', () => {
    expect(login('   ', '123')).toBe(false);
  });
  // Trường hợp mật khẩu rỗng
  test('Mật khẩu rỗng phải trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });
  // Trường hợp mật khẩu chứa ký tự đặc biệt
  test('Mật khẩu chứa ký tự đặc biệt phải trả về false', () => {
    expect(login('admin', '123@#!')).toBe(false);
  });
  test('Mật khẩu chứa ký tự đặc biệt dạng khác phải trả về false', () => {
    expect(login('admin', 'pass$word')).toBe(false);
  });
  // Trường hợp tài khoản bị khóa
  test('Tài khoản bị khóa phải trả về false', () => {
    expect(login('locked_user', '123')).toBe(false);
  });
  test('Tài khoản bị ban phải trả về false', () => {
    expect(login('banned_user', '123')).toBe(false);
  });
  // Trường hợp username không tồn tại
  test('Username không tồn tại phải trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });
  // Trường hợp cả username và password đều rỗng
  test('Cả username và password đều rỗng phải trả về false', () => {
    expect(login('', '')).toBe(false);
  });
  // Trường hợp null/undefined
  test('Username null phải trả về false', () => {
    expect(login(null, '123')).toBe(false);
  });
  test('Password undefined phải trả về false', () => {
    expect(login('admin', undefined)).toBe(false);
  });
});
