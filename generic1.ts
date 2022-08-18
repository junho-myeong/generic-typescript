// generic
// 제네릭이란
// 함수 내부에서 매개변수와 리턴 타입을 설정할때 우리가 사용하는 상황에따라
// 그 데이터 타입을 계속 해서 바꿔서 사용할수 잇게 해주는 문법이다.
function helloString(message: string): string {
  return message
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 비슷한 구조를 가진 함들이 생길수 잇다...

function hello(message: any): any {
  return message
}

console.log(helloString('junho'))
console.log(helloNumber(123))
// 이런상황이라면 우리가 정말 원하는 문자열이 리턴되는것이 아니다.
// 그래서 리턴되는 타입에 연관해서 사용하고 싶어하는것이다.
console.log(hello('junho').length)
console.log(hello(39))

function helloGeneric<T>(message: T): T {
  return message
}

// 리터럴에 의해 T가 문자열 리터럴 타입으로 간주해서 리턴도 문자열 리터럴을 출력해준다.
console.log(helloGeneric('junho').length)
console.log(helloGeneric(39).toFixed)
console.log(helloGeneric(true))
