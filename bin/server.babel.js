//  enable runtime transpilation to use ES6/7 in node

var fs = require('fs');

try {
  var babelrc = fs.readFileSync('./.babelrc');
} catch (err) {
  console.error('==>     ERROR: .babelrc not found');
  console.error(err);
  process.exit(1);
}

var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
  process.exit(1);
}

require('babel-register')(config);
