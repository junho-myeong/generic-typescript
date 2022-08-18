"use strict";
// generic basic
// 제네릭을 통한 함수 작성법
function helloBasic(message) {
    return message;
}
// 제네릭을 통한 함수 사용법
// 함수를 사용할때 제네릭 같을 명확하게 명시해주면, 그에 해당하지 않는 매개 변수는 컴파일 오류한다.
helloBasic('junho');
// 추론 규정에 의해 T는 36타입으로 추론하게 된다(number에 하위 타입으로 추론된다.)
helloBasic(123);
function helloBasic100(name, age) {
    return `안녕하세요 저는 ${name} 이고, 나이는 ${age} 입니다.`;
}
helloBasic100('junho', 30);
helloBasic100('junho', 29);
