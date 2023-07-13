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
 */

/**
 * 30 min attempt
 */
// function romanToInteger(str) {
//   let romanTotal = 0;
//   for (let i = 0; i < str.length; i++) {
//     let romanOne = str[i];
//     let romanTwo = str[i + 1];

//     if (romanOne > romanTwo) {
//       return romanOne - romanTwo;
//     } else {
//       return romanOne + romanTwo;
//     }
//     return romanTotal;
//   }
// }

/**
 * Answer review
 *
 * APPROACH
 *
 * Define object/hash map for our individual roman numerals
 *
 * Accept string
 * initialize int result
 * FOR LOOP (start to end of roman string)
 *    / SLIDING WINDOW METHOD /
 *    grab value of string at curr index
 *      IF char exists at next index
 *        grab value of string at next index
 *
 *        compare value of after char to before
 *        IF curr value is GTE next value
 *          add curr value to result
 *        ELSE (next value is GTE curr value)
 *          store temp sum by adding negative curr + next
 *          add temp to result
 *          increment index by 1
 *      ELSE (no char exists, b/c end of string)
 *        add value of curr char to int result
 * END LOOP
 */

// MCMIV

// MC = 1000
// CM = -100 + 1000 = 900 => 1000 + 900 = 1900
// MI NEED TO SKIP
// IV -1 + 5 = 4 => 1904

function romanToInteger(str) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerResult = 0;

  for (let i = 0; i < str.length; i++) {
    let currNumeral = str[i];
    let currValue = values[currNumeral];

    let nextNumeral = str[i + 1];

    if (nextNumeral) {
      let nextValue = values[nextNumeral];

      if (currValue >= nextValue) {
        integerResult += currValue;
      } else {
        let temp = nextValue - currValue;
        integerResult += temp;
        i++;
      }
    } else {
      integerResult += currValue;
    }
  }

  return integerResult;
}

/**
 * COMPLEXITY
 * - reads as "Oh of ()"
 * TIME   O(N), b/c it depends on length of input
 * SPACE  O(1), no extra space required based on input
 */
