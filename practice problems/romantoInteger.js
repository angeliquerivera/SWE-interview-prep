/**
 * 
 * For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

  -symbols are listed from highest to lowest, from left to right
  -from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.

 *
 * romanToInteger('CXXIII')
// 123

romanToInteger('MCMXCIX')
// 1999


romanToInteger('MMMCDXX')
// 3420
 * 
 * @param {string} str - roman numeral string
 * @returns {number} integer
 * 
 * 
 */
function romanToInteger(str) {
  let romanTotal = 0;
  for (let i = 0; i < str.length; i++) {
    let romanOne = str[1];
    let romanTwo = str[i + 1];

    if (romanOne > romanTwo) {
      return romanOne - romanTwo;
    } else {
      return romanOne + romanTwo;
    }
    return romanTotal;
  }
}
