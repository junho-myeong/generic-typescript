# generic-typescript

## generic vs any(generic1.ts)
- 비슷한 구조를 가진 함수의 경우 통할할때 그 타입을 명확하게 할수 없다.
- 그래서 any를 사용해서 매개변수와 return을 사용하지만
- 리턴 값이 우리가 정말 원하는 타입이 되지 않고 any타입으로 처리 되기 때문에
- generic은 상황에 따라 그 타입을 설정할수 잇다.
``` TS
function helloGeneric<T>(message: T): T {
  return message
}
```

## generic basic(generic2.ts)
1. 제네릭을 통한 함수 작성법
  ```TS
  function helloBasic<T>(message: T): T {
  return message
  }
  ```
1. 제네릭을 통한 함수 사용법 2가지
  1. 함수를 사용할때 실제 사용할 데이터 타입을 선언하고 사용하기, 단 이런경우 다른타입이 들어온 경우에는 컴파일 오류가 발생한다.
  ``` TS
  // 함수를 사용할때 제네릭 같을 명확하게 명시해주면, 그에 해당하지 않는 매개 변수는 컴파일 오류한다.
  helloBasic<string>('junho')
  ```
  1. 함수를 호출할때 선언하지 않고 추론을 통한 방식
  ``` TS
  // 추론 규정에 의해 T는 36타입으로 추론하게 된다(number에 하위 타입으로 추론된다.)
  helloBasic(123)
  ```

## generic Array & Tuple(generic3.ts)
- 매개 변수가 array로 들어온다면, 제네릭도 array형태로 해줘야하고
- 매개 변수가 tuple 형태로 들어온다면, 제네릭도 tuple형태로 해줘야한다.

## generic function(generic4.ts)

## generic class(generic5.ts)
- class에서도 제네릭을 사용할수 잇다 function과 마찬가지로 이름 옆에 사용하고 싶은 타입을 설정할수 잇도록 T,U 처럼 임의의 이름을 지어 주면 된다.
## generic with extends
- 제네릭에서는 상속에 개념 보다는 다른 개념으로 사용된다.
- 제네릭을 사용할때 데이터 타입의 범위를 제한 하는 역활을 한다.

## keyof&type lookup system
- 컴파일 타임에 타입을 정확하게 찾아내는것