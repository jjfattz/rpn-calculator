
# RPN Calculator (CLI)

[Reverse Polish Notation (RPN)](https://en.wikipedia.org/wiki/Reverse_Polish_notation) is a mathematical notation in which operators follow their operands.  An example of `5 + 4` written in RPN would be represented as `5 4 +`.  RPN is parenthesis-free and really shines when computing large equations.

[![Build passing](https://img.shields.io/badge/build-Passing-brightgreen?)](#)
[![Code TypeScript](https://img.shields.io/badge/code-TypeScript-blue?)](https://www.typescriptlang.org/)
[![Node Latest](https://img.shields.io/badge/node-Latest-green?)](https://nodejs.org/en/)
[![Test Jest](https://img.shields.io/badge/test-Jest-yellow?)](https://jestjs.io/)
[![License MIT](https://img.shields.io/badge/license-MIT-yellowgreen?)](https://opensource.org/licenses/MIT)

## Demo

You can [check it out here](https://jjfattz.github.io/rpncalculator-demo.github.io/) running in a simulated web based CLI environment.

## Installation

- Clone the repository
- Run `npm install` in the root folder to install required packages
- Run `npm run build` in the root folder to build the dist folder

## Run Locally

Once the build command above has been executed, you can run the "calculator.js" file in the "dist" folder.

`node dist/src/calculator.js`

Alternatively, you can run the TypeScript version using `ts-node` without running build.

`npx ts-node src/calculator.ts` 

## Tech Stack

**Server:** Node, TypeScript, Jest

This tech stack is modern, popular, and offers the most flexibility for future implementations.  This calculator can be used in either the frontend or backend.


## Trade-offs & Future Improvements

Only the four basic operations are included in this calculator (+, -, *, /).  If I were to spend more time on this I would implement more operators and features.  I would also consider taking the time to convert this into an npm package, especially after adding more features to it.

## Running Tests

To run tests, run the following command

`npm test`

## Usage/Examples

### Run the program

`npx ts-node src/calculator.ts`
```
===== RPN CALCULATOR =====
- Instructions:
  - Enter operations all in one line separated by spaces (5 4 +)
  - Or, enter operations one at a time
    5
    4
    +
  - Enter c to clear the calculator
  - Enter q or press ctrl+c to quit
BEGIN!
```

### Enter operations all in one line
```
5 5 5 8 + + -
> -13
```

### Clear the calculator stack
```
c
> 0
```

### Enter operations one at a time
```
5
> 5
4
> 4
+
> 9
```

### Quit the program
```
q
> Calculator has been closed.
```

## License

RPN Calculator is released under the terms of the MIT license. See https://opensource.org/licenses/MIT for more information.