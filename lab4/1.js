/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    const answer = [];
    let bases = [];
    arr.map((current, index) => {
        let prom_str = current.toLowerCase().split("").sort().join("");
        if (bases.indexOf(prom_str) == -1) {
            bases.push(prom_str);
            answer.push([]);
        }
    });
    arr.map((current, index) => {
        let ind = bases.indexOf(current.toLowerCase().split("").sort().join(""));
        if (ind != -1)
            answer[ind].push(current);
    })
    return answer;
}

module.exports = getAnagramms;
