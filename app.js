var TelegramBot = require('node-telegram-bot-api');
var StartVote = require('./handlers/StartVote');
var ChangeTitle = require('./handlers/ChangeTitle');
var ChangeDescription = require('./handlers/ChangeDescription');
var AddCase = require('./handlers/AddCase');
var IncreaseCaseCount = require('./handlers/IncreaseCaseCount');
var http = require("http");

var bot = new TelegramBot(process.env['BOT_TOKEN'], {polling: true});

// initialize message handler of start vote
StartVote(bot);

bot.on('callback_query', function (msg) {
    var answer = msg.data;

    if (answer === 'title') {
        ChangeTitle(bot, msg)
    }

    if (answer === 'description') {
        ChangeDescription(bot, msg)
    }

    if (answer === 'case') {
        AddCase(bot, msg)
    }

    if (answer.match(/case\.(.+)/)) {
        IncreaseCaseCount(bot, msg)
    }
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);
