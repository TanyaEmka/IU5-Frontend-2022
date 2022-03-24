/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function wArray(arr, answer) {
    for (element of arr) {
        if (typeof element == 'object')
            wArray(element, answer);
        else 
            answer.push(element);
    }    
}

function get1DArray(arr) {
    let answer = [];
    wArray(arr, answer);
    return answer;
}

module.exports = get1DArray;
