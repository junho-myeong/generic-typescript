"use strict";
// generic calss
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
// const p51 = new Person('JUNHO')
// 제네릭을 사용하면 지정한거에 맞는지 확인하고
// const p52 = new Person<string>(123)
// 제네릭을 사용하지 않으면 인자에 의해 추론된다.
// const p52 = new Person<string>('junho1')
const p53 = new Person('junho', 29);
const p54 = new Person('junho', 29);
