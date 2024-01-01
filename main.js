const questionInput = document.getElementById("question");
const answerDiv = document.getElementById("answer");

const askButton = document.getElementById("ask");
askButton.addEventListener("click", () => {
  const question = questionInput.value;

  // Gọi API của Bard AI để lấy câu trả lời
  fetch("https://api.bard.ai/v2/answer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Hiển thị câu trả lời trên trang web
      answerDiv.innerHTML = data.answer;
    });
});

// Tạo hiệu ứng cho trang web
const colors = ["pink", "blue", "green", "yellow"];
let currentColor = colors[0];

setInterval(() => {
  // Thay đổi màu nền của trang web
  document.body.classList.add("bg-" + currentColor);

  // Chuyển sang màu nền tiếp theo
  currentColor = colors[Math.floor(Math.random() * colors.length)];
}, 5000);
