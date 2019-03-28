/* eslint-disable no-console */
function myFunction() {
  console.log(arguments);
  console.log(arguments.length);
};
myFunction(1, 2, 3);

function Store() {
  let aisles = { fruits: [], vegetables: [] };
  return {
    add(aisleName, ...items) {
      items.forEach((val) => {
        aisles[aisleName].push(val);
      });
    },
    aisles: aisles
  };
}

let myGroceryStore = new Store();
myGroceryStore.add('fruits', 'apple', 'oranges');
console.log(myGroceryStore.aisles);
