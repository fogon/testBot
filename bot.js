const TelegramBot = require('node-telegram-bot-api');
const token = '7**********************************M';
const bot = new TelegramBot(token, {polling: true});
// Переменная с номером
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

	if (a >= 0) {
		var text = text.slice(-19,-12);
		text = text.trim();
		text = parseFloat(text);
		//console.log(typeof(text));

		var obj ={name: firstName,
				sum: text};

		arr.push(obj);

		console.log(arr);
	};

	if (text === `/getResult`) {

		if (arr.length > 0) {

			var i = 0;

		var filterSum = arr.filter(function(sum, i, arr) {
			i+1;
			if (arr[i].sum) {
				return true;
			};
		});

		console.log(`filterSum ${JSON.stringify(filterSum)}`);
		var b = 0;

		filterSum.sort(function(a, b) {
			console.log(typeof a.sum, typeof b.sum);
			return b.sum - a.sum;
		});

		console.log(`sortingSum ${JSON.stringify(filterSum)}`);

		filterSum.forEach(function(name, i, filterSum) { 
			if (filterSum.name 	!== filterSum.name) {
				
			};
		});
			bot.sendMessage(chatId, `Всего участников: ${i+1} \n\n ${i+1}) ${filterSum[i].name}, ${filterSum[i].sum}\n`);
		}
		else {
			bot.sendMessage(messageId, `Нет участников`);

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
});

outputResult*/
