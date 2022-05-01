/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let queue = [];
    let l_staples = ['(', '[', '<'];
    let r_staples = [')', ']', '>'];
    let answer = true;
    str.split("").map((current, index) => {
        if (l_staples.indexOf(current) != -1)
            queue.push(current);
        let last_ind = queue.length - 1;
        if (r_staples.indexOf(current) != -1 && queue.length != 0) {
            if (l_staples.indexOf(queue[last_ind]) == r_staples.indexOf(current))
                queue.pop();
            else
                answer = false;
        }
    });
    return answer;
}

module.exports = checkBrackets;
