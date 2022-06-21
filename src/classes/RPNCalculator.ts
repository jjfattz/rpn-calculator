import { Calculator } from "./Calculator";
const VALID_OPERATORS:any = ["+", "-", "*", "/"];

interface Options {
    max_stack_size:number
}

const DEFAULT_OPTIONS:Options = {
    max_stack_size: 20
}

class RPNCalculator extends Calculator {
    options:Options;
    command_stack:any[];

    constructor(stack:any[] = [], options:Options = DEFAULT_OPTIONS) {
        super();
        this.command_stack = stack;
        this.options = options;
    }

    lastItemIsOperator(stack:any[]):boolean {
        const length = stack.length;
        return isNaN(stack[length-1]) && VALID_OPERATORS.includes(stack[length-1]);
    }

    stackIsReadyForOperator(stack:any[]) {
        const length = stack.length;
        return length >= 3 && !isNaN(stack[length-2]) && !isNaN(stack[length-3]);
    }

    calculateStack(stack:any[]):number {
        const lastItem = stack[stack.length-1];
        let previousTwoItems:number[];
        let result:number = 0;
        let new_stack:any[];
        if(this.lastItemIsOperator(stack) && this.stackIsReadyForOperator(stack)) {
            previousTwoItems = [Number(stack[stack.length-2]), Number(stack[stack.length-3])];
            switch(lastItem) {
                case "+":
                    result = this.add(previousTwoItems[1], previousTwoItems[0]);
                    break;
                
                case "-":
                    result = this.subtract(previousTwoItems[1], previousTwoItems[0]);
                    break;
                
                case "*":
                    result = this.multiply(previousTwoItems[1], previousTwoItems[0]);
                    break;
                
                case "/":
                    result = this.divide(previousTwoItems[1], previousTwoItems[0]);
                    break;
                
                default:
                    throw new Error("Invalid operator");
            }
            new_stack = this.command_stack;
            new_stack.splice(0, new_stack.length-3);
            new_stack.push(result);
            this.command_stack = new_stack;
            if(this.lastItemIsOperator(this.command_stack) && this.stackIsReadyForOperator(this.command_stack)) {
                return this.calculateStack(this.command_stack);
            }
        }
        return result;
    }

    calculate():number {
        return this.calculateStack(this.command_stack);
    }

    addItemToStack(item:any):void {
        if(this.command_stack.length+1 > this.options.max_stack_size) {
            throw new Error("Max stack size exceeded");
        }
        if(this.itemIsValid(item)) {
            this.command_stack.push(item);
            return;
        }
    }

    itemIsValid(item:any):boolean {
        if(isNaN(Number(item)) && !VALID_OPERATORS.includes(item)) {
            throw new TypeError("Input must be a valid number or operator.");
        }
        return true;
    }
}

export { RPNCalculator };