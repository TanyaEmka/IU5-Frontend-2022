/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

function customBind(f, context, ...rest) {
    return function(...args) {
        const uuid = Date.now().toString();
        context[uuid] = f;
        const res = context[uuid](...rest.concat(args));
        delete context[uuid];
        return res;
    }
}

module.exports = customBind;
