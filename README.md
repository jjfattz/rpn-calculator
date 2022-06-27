
# RPN Calculator

This is a CLI Reverse Polish Notation (RPN) calculator written in TypeScript.  RPN is a mathematical notation in which operators follow their operands.  Instead of `5 + 4` RPN would be represented as `5 4 +`.  RPN really shines when processing large equations.

This app is written in TypeScript running on NodeJS. Unit tests are handled with the Jest framework.  The application is structured with resusable OOP classes so it can be used in other contexts aside from a CLI implementation.


[![MIT License](https://img.shields.io/badge/build-Passing-brightgreen?)](#)
[![MIT License](https://img.shields.io/badge/code-TypeScript-blue?)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/node-Latest-green?)](https://nodejs.org/en/)
[![MIT License](https://img.shields.io/badge/test-Jest-yellow?)](https://jestjs.io/)
[![MIT License](https://img.shields.io/badge/license-MIT-yellowgreen?)](https://opensource.org/licenses/MIT)


## Demo

You can [check it out here](https://google.com) running in a simulated web based CLI environment.

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