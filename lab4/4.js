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

function w_array(arr, answer) {
    for (element of arr) {
        if (typeof element == 'object')
            w_array(element, answer);
        else 
            answer.push(element);
    }    
}

function get1DArray(arr) {
    let answer = [];
    w_array(arr, answer);
    return answer;
}

module.exports = get1DArray;
