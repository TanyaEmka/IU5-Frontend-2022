/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */

Array.prototype.myMap = function(func) {
    let arr = [];
    if (this.length != 0) {
        this.reduce((prev, curr, index) => {
            if (index == 1)
                arr.push(func(prev));
            arr.push(func(curr));
        })
    }
    return arr;
}
