# RPNCalculator

## Overview

This is a CLI Reverse Polish Notation (RPN) calculator written in TypeScript.  RPN is a mathematical notation in which operators follow their operands.  Instead of `5 + 4` RPN would be represented as `5 4 +`.  RPN really shines when processing large equations.

This app is written in TypeScript running on NodeJS. Unit tests are handled with the Jest framework.  Architecturally, the code is written in resusable OOP classes so it can be used in other contexts aside from a CLI implementation.

## Tradeoffs and Improvements

Only the four basic operations are included in this calculator (+, -, *, /).  If I were to spend more time on this I would implement more operators.  

## Setup & build Instructions

- Clone the repository
- Run `npm install` in the root folder to install required packages
- Run `npm run build` in the root folder to build the dist folder

## How to run

Once the build command above has been executed, you can run the "calculator.js" file in the "dist" folder.

`node dist/src/calculator.js`

Alternatively, you can run the TypeScript version using `ts-node`.

`npx ts-node src/calculator.ts` 

### Example usage

#### Run the program
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

#### Enter operations all in one line
```
5 5 5 8 + + -
> -13
```

#### Clear the calculator stack
```
c
> 0
```

#### Enter operations one at a time
```
5
> 5
4
> 4
+
> 9
```

#### Quit the program
```
q
> Calculator has been closed.
```

## Running tests

Run the following command to run tests and see test coverage:

`npm test`

