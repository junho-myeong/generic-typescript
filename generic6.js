"use strict";
// generic with extends
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
// 여기서 말하는 extends는 상속 과 같은 개념이 아니고
// extends에 해당하는 타입만 넣을수 잇다는 뜻이다.
new PersonExtends('junho');
new PersonExtends(123);
// new PersonExtends(true)
