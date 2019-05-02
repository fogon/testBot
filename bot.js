const TelegramBot = require('node-telegram-bot-api');
const token = '747941698:AAGazXigJwIIMHjmRgGHhplU5LXerVyZzZM';
const bot = new TelegramBot(token, {polling: true});

console.log(bot);
var i = 1;

console.log(i);
bot.on('message',function(msg){
	i++;
	const chatId = msg.chat.id;
	const text = msg.text;
	const firstName = msg.chat.first_name;
	//const expression = firstName + ', ' + text;
	console.log(text);
	//console.log(firstName);

	bot.sendMessage(chatId,'Это сообщение номер '+i);
});
