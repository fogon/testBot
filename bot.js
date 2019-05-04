const TelegramBot = require('node-telegram-bot-api');
const token = '747941698:AAGazXigJwIIMHjmRgGHhplU5LXerVyZzZM';
const bot = new TelegramBot(token, {polling: true});

var i = '';

console.log(i);

bot.on('message', function(msg) {

	var chatId = msg.chat.id;

	console.log(chatId);

	if (chatId === 322724363 || 511825463){

		var text = msg.text;

		 var a = text.search('#LKWAVEкурс');

		 console.log(i);

		if (a >= 0) {

			i += text + ' ';

			console.log(i);

		};

			if (text === '/getResult') {

				//console.log(a);

				bot.sendMessage(chatId, i);

			};		
		
	};

});






/*console.log(bot);
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
});*/
