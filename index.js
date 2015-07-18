'use strict';

/**
* Adds commas and punctuation to numbers.
* @param {number} number
* @param {string} locale
* @return {string}
*/
module.exports = function(number, locale){
  var numFormatted = number.toLocaleString(locale);
  console.log('numFormatted');
  return numFormatted;
};
