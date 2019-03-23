/* eslint-disable no-console */
// 02-03 Fat arrow
const arrowGreeting = name => `${name}, hello`;

console.log(arrowGreeting);

const boy = {
  name: 'John',
  handleMessage(message, handler) {
    handler(message);
  },

  receive() {
    this.handleMessage('hello2', (message) => {
      console.log(message, this.name);
      console.log(message, this.name);
    });
  },
};

boy.receive();

//  04 -Function as a param

const receive = callback => callback();

receive(() => console.log('hello'));

// 05-06 - destructuring, object enhancements

const firstName = 'Lana';
const lastName = 'Dz';

const person = {
  firstName,
  lastName,
  say: () => console.log('singing'),
};

console.log(person.lastName);
person.say();

// spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1);

const addThreeNumbers = (a, b, c) => a + b + c;
console.log(addThreeNumbers(...arr1));

// String templates and string tagging

const salutation = 'Hello';
const greeting = `
${salutation} test
`;
console.log(greeting);

const x = 1;
const y = 2;
console.log(`${x} + ${y} = ${x + y} `);

const tag = (strings, ...values) => {
  console.log(strings);
  console.log(values);
  console.log(new Date().getHours());
  if (values[0] < 20) {
    // eslint-disable-next-line no-param-reassign
    values[1] = 'awake';
  } else {
    // eslint-disable-next-line no-param-reassign
    values[1] = 'sleepy';
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
};

const message = tag`It's ${new Date().getHours()} and I am ${''}`;

console.log(message);
