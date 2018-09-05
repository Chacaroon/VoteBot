var EditMessage = require('./EditMessage');

module.exports = function (bot, msg) {
    var _case = msg.data.split('.')[1];

    var cases = msg.message.text.split('\n');

    for (var i in cases) {
        var index = cases[i].indexOf(_case + ': ');
        if (index === -1) {
            continue;
        }

        var count = cases[i].split(': ')[1];

        cases[i] = _case + ': ' + ++count;
    }

    var str = '';

    cases.forEach(function (value) { str += value + '\n' });

    EditMessage(bot, msg, str);
};