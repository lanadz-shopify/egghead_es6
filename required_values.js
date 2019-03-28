/* eslint-disable no-console */

const requiredValue = (name) => {
  throw new Error(`Value is missing for "${name}"`);
}
const ajax = ({
  type = 'get',
  url = requiredValue('url'),
  data = {},
  success = () => { },
  error = () => { },
  isAsync = true,
}) => {
  console.log(JSON.stringify({
    type,
    url,
    data,
    success,
    error,
    isAsync,
  }));
};

try {
  ajax({ url: 'http://localhost' }); //  is ok, because url is required
  ajax({}); // error is thrown
} catch (e) {
  console.log(e.message);
}
