var buttons = require('../models/ButtonsModels');

module.exports = function (bot, msg, completedString) {

    var res = GenerateResponse(completedString);

    bot.editMessageText(res.text, {
        reply_markup: JSON.stringify({
            inline_keyboard: res.inline_keyboard
        }),
        chat_id: msg.message.chat.id,
        message_id: msg.message.message_id
    });
};

function GenerateResponse(msg) {
    var strings = msg.split('\n');
    var inline_keyboard = [
        [
            buttons.title,
            buttons.description
        ]
    ];

    var caseButtons = [];

    for (var i = 2; i < strings.length; i++) {
        var __case = strings[i].split(':');
        if (!strings[i]) continue;
        caseButtons.push([{text: __case[0], callback_data: 'case.' + __case[0]}])
    }

    inline_keyboard = inline_keyboard.concat(caseButtons);
    inline_keyboard.push([buttons.case]);

    var res = {text: '', inline_keyboard: inline_keyboard};

    strings.forEach(function (value) {
        res.text += value + '\n'
    });

    return res;
}