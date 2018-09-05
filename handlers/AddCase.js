var EditMessage = require('./EditMessage');

module.exports = function (bot, msg) {
    bot.sendMessage(msg.message.chat.id, 'Чтобы добавить вариант для голосования, скажи: "Добавь вариант /вариант/"');

    bot.onText(/Добавь вариант (.+)/, function (msg1, ex) {

        var mmm = AddCaseToArray(ex[1], msg.message.text);

        EditMessage(bot, msg, mmm);
    })
};

function AddCaseToArray(_case, msg) {
    var strings = msg.split('\n');

    strings.push(_case + ': 0');

    var res = '';

    strings.forEach(function (value) {
        res += value + '\n'
    });

    return res;
}