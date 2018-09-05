var GetDescription = require('./GetDescription');
var AddDescription = require('./AddDescription');
var EditMessage = require('./EditMessage');

module.exports = function (bot, msg) {
    GetDescription(bot, msg.message.chat.id, msg.from.username);

    bot.onText(/Новым описанием будет (.+)/, function (msg1, ex) {
        var completedString = AddDescription(ex[1], msg.message.text);

        EditMessage(bot, msg, completedString);
    })
};