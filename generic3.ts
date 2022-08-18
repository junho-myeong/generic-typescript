// generic Array & Tuple

// array
function helloArray<T>(message: T[]): T {
  // T타입에 해당하는 요소 자체를 리턴한다.
  return message[0]
}

// T는 string으로 추론하고
helloArray(['hello', 'world'])
// T는 string | number로 추론된다.
helloArray(['hello', 5])

// tuple
function helloTuple<T, U>(message: [T, U]): T {
  return message[0]
}
helloTuple(['hello', 123])
