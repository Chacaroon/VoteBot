module.exports = function (title, message) {
    var strings = message.split('\n');

    strings[0] = 'Тема: ' + title;

    var completedMessage = '';

    strings.forEach(function (value) {
        completedMessage += value + '\n'
    });

    return completedMessage;
};