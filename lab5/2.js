/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    return function c(...args) {
        if (args.length >= f.length)
            return f.apply(this, args);
        else {
            return function(...args2) {
                return c.apply(this, args.concat(args2));
            }
        }
    }
}

module.exports = curry;
