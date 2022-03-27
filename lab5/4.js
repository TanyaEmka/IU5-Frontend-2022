/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

let prev = undefined;

function memoize(func) {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache && prev == n) {
            prev = n;
            return {
                cache: true,
                result: cache[n]
            };
        }
        else {
            let resultF = func(n);
            cache[n] = resultF;
            prev = n;
            return {
                cache: false,
                result: resultF 
            };
        }
    }
}

module.exports = memoize;
