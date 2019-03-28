/* eslint-disable no-console */
function* greet() {
  console.log('Generators are lazy');
  yield 'first yield';
  console.log('Not called until second next()');
  yield 'second yield';
  console.log('Not called until third next()')
  yield 'third yield';
}

const greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);

//---------------

function* graph() {
  let x = 0;
  let y = 0;
  while (true) {
    yield { x, y };
    x += 2;
    y += 2;
  }
}

const graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
