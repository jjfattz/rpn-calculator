import { RPNCalculator } from "./classes/RPNCalculator";
const calculator = new RPNCalculator();

console.log("---- RPN CALCULATOR ----");
console.log("- Instructions:");
console.log("  -- Enter operations all in one line separated by spaces (5 4 +)");
console.log("  -- Or, enter operations one at a time");
console.log("  -- Enter c to clear the calculator");
console.log("  -- Enter q or press ctrl+c to quit");

process.stdin.setEncoding ("utf-8");
process.stdin.on('readable', () => {
    let input;

    while((input = process.stdin.read()) !== null) {
        try {
            input = input.replace(/(\r\n|\n|\r)/gm, "");
            if(input === "q") {
                console.log("Calculator has been closed.");
                process.exit();
            }
            switch(input) {
                case "q":
                    console.log("Calculator has been closed.");
                    process.exit();
                case "c":
                    calculator.clearStack();
                    console.log(0);
                    break;
                default:
                    calculator.appendToStack(input.split(" "));
                    console.log(calculator.calculate());
            }
        } catch(err:any) {
            console.log(`Error! ${err.message}`);
        }
    }
});