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

function memoize(func) {
    let cacheF = {};
    return (...args) => {
    let n = args[0];
    let resultF = func(n);
    if (n in cacheF) {
        return {
            cache: true,
            result: cacheF[n]
        };
    }
    else {
        let resultF = func(n);
        cacheF[n] = resultF;
        return {
            cache: false,
            result: resultF 
        }
    }
  }
}

module.exports = memoize;
