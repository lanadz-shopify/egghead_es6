/* eslint-disable no-console */
const myMap = new Map();
myMap.set(1, 1);
myMap.set('hello', 'world');

console.log(myMap.get('hello'));
console.log(myMap.size);
// myMap.clear();
console.log(myMap.has(1));

for (let key of myMap.keys()) {
  console.log(key);
}

for (let val of myMap.values()) {
  console.log(val);
}

for (let [key, val] of myMap.entries()) {
  console.log(`${key} = ${val}`);
}
