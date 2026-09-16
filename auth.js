// auth.js
const LOCKED_ACCOUNTS = ['locked_user', 'banned_user'];
function login(username, password) {
  // Kiểm tra username rỗng
  if (!username || username.trim() === '') {
    return false;
  }
  // Kiểm tra password rỗng
  if (!password || password.trim() === '') {
    return false;
  }
  // Kiểm tra tài khoản bị khóa
  if (LOCKED_ACCOUNTS.includes(username)) {
    return false;
  }
  // Kiểm tra ký tự đặc biệt trong password (không hợp lệ)
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialCharRegex.test(password)) {
    return false;
  }
  // Kiểm tra thông tin đăng nhập đúng
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}
module.exports = { login };
