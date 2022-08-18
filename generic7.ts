// keyof & type lookup system

interface Iperson {
  name: string;
  age: number;
}

const person: Iperson = {
  name: 'junho',
  age: 29
}

// function getProp(obj: Iperson, key: 'name' | 'age'): string | number {
//   return obj[key]
// }

// function setProp(obj: Iperson, key: 'name' | 'age', value: string | number): void {
//   obj[key] = value
// }

// type Keys = keyof Iperson;

// const keys: Keys = "age"

//  Iperson[keyof Iperson] 
// => Iperson["name"] | Iperson["age"]
// string | number

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

getProp(person, 'name')

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}

setProp(person, 'name', 'mark')

console.log(getProp(person, 'name'))