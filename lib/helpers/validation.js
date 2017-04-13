const isInteger = (num) => Number.isInteger(num);
const isTimeStamp = (timestamp) => ((new Date(timestamp)).getTime() > 0);

module.exports.isInteger = isInteger;
module.exports.isTimeStamp = isTimeStamp;