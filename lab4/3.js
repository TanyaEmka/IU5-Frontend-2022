/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let prev = "";
    let answer = "";
    let symbols = [];
    let numbers = [];
    str.split("").map((current) => {
        if (current == prev) {
            numbers[numbers.length - 1]++;
        }
        else {
            symbols.push(current);
            numbers.push(1);
            prev = current;
        }
    });
    symbols.map((current, index) => {
        answer += current + (numbers[index] > 1 ? numbers[index].toString() : "");
    });
    return answer;
}

module.exports = rle;
