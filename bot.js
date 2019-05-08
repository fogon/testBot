const TelegramBot = require('node-telegram-bot-api');
const token = '747941698:AAGazXigJwIIMHjmRgGHhplU5LXerVyZzZM';
const bot = new TelegramBot(token, {polling: true});
// Переменная с номером
var b = 1;

var c;

var arr = [];

//console.log(c);

bot.on('message', function(msg) {

	var chatId = msg.chat.id;

	var messageId = msg.from.id;

	//console.log(msg.from);

	var firstName = msg.from.first_name;

	var text = msg.text;

	var a = text.search('#LKWAVEкурс');

	//console.log(i);

	if (a >= 0) {

		var text = text.slice(-19,-12);

		var text = text.trim();

		var obj ={name: firstName,
				sum: text};
 
		arr.push(obj);

		//console.log(arr);

		for (var i = 0; i <= arr.length; i++) {
			parseFloat(arr.obj.sum);
		};

		console.log(arr);

		b++;

	};

	if (text === `/getResult`) {

		if (arr.length > 0) {

			//var str = `Всего участников: ${b-1} \n \n ${b}) ${obj.name}, ${obj.sum}`;

			//console.log(str);

			function compareReversed(arr) {

				var name = arr.obj.name;

				var sum = arr.obj.sum;

				return sum > 0;

			};

			console.log(compareReversed(arr));

			arr.sort(compareReversed);

			bot.sendMessage(chatId, arr);
	
		}

		else {

			bot.sendMessage(chatId, `Нет участников`);

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








/*arr.push(text);

		var sum = arr.join(`, `)

		parseFloat(sum);

		console.log(sum);

		//console.log(isNaN(text));

		c = `${firstName}, ${text}`;

		arr.push(c);

		console.log(arr);
	
		i += `${b}) ${c} \n`;

		console.log(i);

		b++; */