# @libchrono/duration

[![npm version](https://badge.fury.io/js/%40libchrono%2Fduration.svg)](https://badge.fury.io/js/%40libchrono%2Fduration)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![](coverage/badge.svg)

@libchrono/duration is a library for parsing and validating strings representing durations of time. It provides a convenient way to parse strings like "1w 2h" into `Duration` objects, and provides convenient functions for performing basic math operations on those objects. So whether you need to parse duration strings, or perform calculations on them, @libchrono/duration is the perfect library for your project.
## Installation

To use @libchrono/duration in your project, install it via npm:

```
npm install @libchrono/duration
```

or yarn:

```
yarn add @libchrono/duration
```

## Usage

Parse duration literal to Duration object:

```js
const { DurationUtils } = require('@libchrono/duration');

const duration = DurationUtils.parse('1w 2h');

console.log(duration);
/**
 * Output:
 * {
 *    timestamp: 612000000,                 // count of millis in duration
 *    getWeeks: () => number,               // returns current count of weeks
 *    getDays: () => number,                // returns current count of days
 *    getHours: () => number,               // returns current count of hours
 *    getMinutes: () => number,             // returns current count of minutes
 *    getSeconds: () => number,             // returns current count of seconds
 *    getMillis: () => number,              // returns current count of millis
 *    toPlainDuration: () => PlainDuration, // returns object containing all units
 *    toStringLiteral: () => string,        // returns string like 1d 14h
 *    toWeeks: () => number,                // returns count of weeks
 *    toDays: () => number,                 // returns count of days with weeks 
 *                                          // converted to days
 *    toHours: () => number,                // returns count of hours with days 
 *                                          // and weeks converted to hours
 *    toMinutes: () => number,              // returns count of minutes with 
 *                                          // hours, days and weeks converted
 *                                          // to minutes
 *    toSeconds: () => number,              // returns count of seconds with
 *                                          // minutes, hours, days and weeks
 *                                          // converted to seconds
 *    toMillis: () => number,               // returns count of millis with
 *                                          // seconds, minutes, hours and
 *                                          // weeks converted to millis
 * }
 */
```

Parse duration literal with operations to Duration object:

```js
const { DurationUtils } = require('@libchrono/duration');

const duration = DurationUtils.parse('(1w 2h + 5h + 30m) * 2');

console.log(duration.toStringLiteral()); // Output: 2w 15h
```

Parse duration literal to Duration object and perform operations:

```js
const { DurationUtils } = require('@libchrono/duration');

const duration = DurationUtils.parse('1w');

console.log(duration.add(DurationUtils.parse('2d')).toStringLiteral());
// Output: 1w 2d

console.log(duration.sub(DurationUtils.parse('2d')).toStringLiteral());
// Output: 5d

console.log(duration.mul(2).toStringLiteral());
// Output: 2w

console.log(duration.div(2).toStringLiteral());
// Output: 3d 12h
```

Validate duration literal

```js
const { DurationUtils } = require('@libchrono/duration');

const duration1 = DurationUtils.validate('1w 2h');

console.log(duration1.isValid); // Output: true

const duration2 = DurationUtils.validate('1w 1q');

console.log(duration2.isValid); // Output: false

const duration3 = DurationUtils.validate('1d 1w');

console.log(duration3.isValid); // Output: false
```
