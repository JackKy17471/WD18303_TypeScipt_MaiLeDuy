const playerNameInput = document.getElementById('playerName');
const submitButton = document.querySelector('button[type="submit"]');
const cancelButton = document.getElementById('btnCancel');
const resetButton = document.getElementById('btnReset');
const startButton = document.getElementById('btnStart');

// Xử lý validate và submit form

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const playerName = playerNameInput.value;

  // ... Kiểm tra và xử lý validate

  // Xử lý tiếp theo sau khi validate thành công
  // Ví dụ: submit form, lưu tên người chơi, ...
  alert('Tên người chơi hợp lệ: ' + playerName);
});


startButton.addEventListener('click', () => {
    // Xác nhận với người chơi trước khi bắt đầu
    if (confirm('Bạn có muốn bắt đầu trò chơi?')) {
      // Xử lý bắt đầu trò chơi
      // 1. Kiểm tra tên người chơi
      const playerNameInput = document.getElementById('playerName');
      const playerName = playerNameInput.value;
  
      if (!playerName) {
        alert('Vui lòng nhập tên người chơi!');
        return;
      }
  
      // 2. Ẩn form nhập tên
      const form = document.querySelector('.form-container');
      form.classList.add('d-none');
  
      // 3. Hiển thị giao diện trò chơi
      const gameContainer = document.querySelector('.game-container');
      gameContainer.classList.remove('d-none');
  
      // 4. Khởi tạo trò chơi
      // ...
  
      // 5. Lưu trữ thông tin người chơi (tuỳ chọn)
      // ...
    }
  });
// Xử lý nút Huỷ

cancelButton.addEventListener('click', () => {
    // Xác nhận với người chơi trước khi huỷ
    if (confirm('Bạn có muốn huỷ trò chơi?')) {
      // Xử lý huỷ trò chơi
      // 1. Quay về trang chủ
      window.location.href = 'index.html';
  
      // 2. Lưu trữ thông tin huỷ trò chơi (tuỳ chọn)
      // ...
    }
  });

// Xử lý nút Reset



resetButton.addEventListener('click', () => {
  // Xác nhận với người chơi trước khi reset
  if (confirm('Bạn có muốn reset trò chơi?')) {
    // Xử lý reset trò chơi
    // 1. Xoá tên người chơi
    const playerNameInput = document.getElementById('playerName');
    playerNameInput.value = '';

    // 2. Khởi tạo lại các dữ liệu trò chơi
    // ...

    // 3. Làm mới trang
    location.reload();
  }
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Xử lý đổi màu cho phần tử đang click
    card.classList.toggle('active');
  });
});

