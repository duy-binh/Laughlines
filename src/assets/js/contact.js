const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !message.value) {
    alert("Vui Lòng Điền Thông Tin");
    return;
  }

  alert("Đã Gửi Thành Công");
  form.reset();
});