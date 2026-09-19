function login(user, pass) {
  return user === 'admin' && pass === '1234';
}

// Xuất hàm cho Jest (Node.js); trình duyệt bỏ qua đoạn này
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
