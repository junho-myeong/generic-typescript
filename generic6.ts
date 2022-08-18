// generic with extends
class PersonExtends<T extends string | number> { // extends라는 키워드를 통해서 generic을 제한 해준다면 사용자 입장에서는 더 편할수 잇다.
  private _name: T;

  constructor(name: T) {
    this._name = name
  }
}

// 여기서 말하는 extends는 상속 과 같은 개념이 아니고
// extends에 해당하는 타입만 넣을수 잇다는 뜻이다.
new PersonExtends('junho')
new PersonExtends(123)
// new PersonExtends(true)

