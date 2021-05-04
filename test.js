const avo = require('./');

avo('test').bind(() => {
  console.log('Working successfully!');
});

avo('test').value = 'Testing: 1, 2, 3.';
