module.exports = function (description, message) {
    var strings = message.split('\n');

    strings[1] = 'Описание: ' + description;

    var completedMessage = '';

    strings.forEach(function (value) {
        completedMessage += value + '\n'
    });

    return completedMessage;
};