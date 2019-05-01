const TelegramBot = require('node-telegram-bot-api');

const token = '747941698:AAGazXigJwIIMHjmRgGHhplU5LXerVyZzZM';
const bot = new TelegramBot(token, {polling: true});

let	user = 'max';

function function_name() {
	user + 'как дела?';
}
console.log (function_name());