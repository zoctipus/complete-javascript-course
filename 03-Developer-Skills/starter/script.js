// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temp = [17, 21, 23];

const printForecast = function (arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += `... ${arr[i]} C in ${i} days `;
  }
  output += '...';
  console.log(output);
};

printForecast(temp);
