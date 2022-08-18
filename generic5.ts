// generic calss
class Person<T, K> {
  private _name: T;
  private _age: K

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

// const p51 = new Person('JUNHO')

// 제네릭을 사용하면 지정한거에 맞는지 확인하고
// const p52 = new Person<string>(123)
// 제네릭을 사용하지 않으면 인자에 의해 추론된다.
// const p52 = new Person<string>('junho1')

const p53 = new Person('junho', 29)
const p54 = new Person<string, number>('junho', 29)