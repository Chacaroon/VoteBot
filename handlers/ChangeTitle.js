var GetTitle = require('./GetTitle');
var AddTitle = require('./AddTitle');
var EditMessage = require('./EditMessage');

module.exports = function (bot, msg) {
    GetTitle(bot, msg.message.chat.id, msg.from.username);

    bot.onText(/Новой темой будет (.+)/, function (msg1, ex) {
        var completedString = AddTitle(ex[1], msg.message.text);

        EditMessage(bot, msg, completedString);
    })
};