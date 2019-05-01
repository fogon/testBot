const TelegramBot = require('node-telegram-bot-api');

const token = '747941698:AAGazXigJwIIMHjmRgGHhplU5LXerVyZzZM';
const bot = new TelegramBot(token, {polling: true});

	
/*bot.on('message',function(msg){
	const user = msg.chat.id;

	bot.sendMessage(user,user);
	//console.log("test");
});*/
console.log(bot);

bot.on('message',function(msg){
	const chatId = msg.chat.id;
	const text = msg.text;

	const firstName = msg.chat.first_name;
	const expression = firstName + ', ' + text;
	console.log(text);
	console.log(firstName);
	bot.sendMessage(chatId,expression);
});
