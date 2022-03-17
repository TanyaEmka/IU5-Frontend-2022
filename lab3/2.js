/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let newStr = str.replace(/[^0-9,.-]/g, " ");
    let strNumbers = newStr.split(" ");
    let numbers = [];
    for (let i = 0; i < strNumbers.length; i++) {
        let number = parseFloat(strNumbers[i]);
        if (!isNaN(number)) {
            numbers.push(number);
        }
    }
    let max_n = numbers[0], min_n = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max_n)
            max_n = numbers[i];
        if (numbers[i] < min_n)
            min_n = numbers[i];
    }
    return {
        min: min_n,
        max: max_n
    };
}

module.exports = getMinMax;
