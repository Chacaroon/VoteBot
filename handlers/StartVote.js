var strings = require('../models/StringModels');
var buttons = require('../models/ButtonsModels');

module.exports = function(bot)
{
    bot.onText(/Начать голосование/, function (msg) {
        var fromId = msg.chat.id;
        bot.sendMessage(fromId, strings.title + '\n' +
            strings.description + '\n', {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        buttons.title,
                        buttons.description
                    ],
                    [buttons.case]
                ]
            })
        });
    });
};