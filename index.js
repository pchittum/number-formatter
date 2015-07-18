'use strict';

/**
* Adds commas and punctuation to numbers.
* @param {number} number
* @param {string} locale
* @return {string}
*/
module.exports = function(number, locale){
  return number.toLocaleString(locale);
};
