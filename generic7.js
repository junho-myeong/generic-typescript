"use strict";
// keyof & type lookup system
const person = {
    name: 'junho',
    age: 29
};
// type Keys = keyof Iperson;
// const keys: Keys = "age"
//  Iperson[keyof Iperson] 
// => Iperson["name"] | Iperson["age"]
// string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'name');
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, 'name', 'mark');
console.log(getProp(person, 'name'));
