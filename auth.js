// auth.js
// Danh sách tài khoản bị khóa
const LOCKED_ACCOUNTS = new Set(['locked_user', 'banned_user']);
// Regex kiểm tra ký tự đặc biệt
const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/;
// Thông tin đăng nhập hợp lệ (giả lập)
const VALID_CREDENTIALS = {
  username: 'admin',
  password: '9999',
};
/**
 * Kiểm tra chuỗi rỗng hoặc chỉ chứa khoảng trắng
 */
function isBlank(value) {
  return !value || value.trim() === '';
}
/**
 * Hàm đăng nhập
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
function login(username, password) {
  // 1. Kiểm tra đầu vào rỗng
  if (isBlank(username) || isBlank(password)) {
    return false;
  }
  // 2. Kiểm tra tài khoản bị khóa
  if (LOCKED_ACCOUNTS.has(username)) {
    return false;
  }
  // 3. Kiểm tra ký tự đặc biệt trong password
  if (SPECIAL_CHAR_REGEX.test(password)) {
    return false;
  }
  // 4. Kiểm tra thông tin đăng nhập
  return (
    username === VALID_CREDENTIALS.username &&
    password === VALID_CREDENTIALS.password
  );
}
module.exports = { login };
