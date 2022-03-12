/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let newStr = str.split(" ");
    let answer = "";
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
        answer += newStr[i];
        if (i != newStr.length - 1)
            answer += " ";
    }
    return answer;
}

module.exports = capitalize;
