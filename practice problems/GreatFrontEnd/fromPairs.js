/**
 * @see {@link https://www.greatfrontend.com/questions/javascript/from-pairs fromPairs}
 */

/**
 * EXPLAIN
 * Create a function `fromPairs(pairs)` that takes the key-value pairs and returns a new object
 * `fromPairs(pairs)` takes in array as param
 * Obj is returned
 */

/**
 * APPROACH
 * create variable to store empty object
 * START LOOP
 * grab current value
 * reassign curr arr value to obj key
 * reassign next value to obj value
 * END LOOP
 * return obj
 */

export default function fromPairs(pairs) {
  let obj = {};
  for (let i = 0; i < pairs.length; i++) {
    let currKey = pairs[i];
    let currValue = pairs[i + 1];
    Object.assign(obj, { currKey, currValue });
  }
  return obj;
}

/**
 * COMPLEXITY
 * TIME   O()
 * SPACE  O()
 */

/**
 * TIME TAKEN
 *
 * READ             00:00:20
 * EXPLAIN          00:01:40
 * 1st APPROACH     00:06:56
 * CODE             00:05:13
 * FIRST TEST       00:01:40
 * 2nd APPROACH     00:06:21
 * 2nd CODE [FAIL]  00:08:01
 * OPTIMIZE         0
 */
