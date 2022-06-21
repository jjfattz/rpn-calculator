import { Calculator } from "./Calculator";
const VALID_OPERATORS:any = ["+", "-", "*", "/"];

class RPNCalculator extends Calculator {
    constructor(stack:[any]) {
        super();
        this.init(stack);
    }

    lastItemIsOperator(stack:[any]):boolean {
        const length = stack.length;
        return !isNaN(stack[length-1]);
    }

    stackIsReadyForOperator(stack:[any]) {
        const length = stack.length;
        return length >= 3 && isNaN(stack[length-2]) && isNaN(stack[length-3]);
    }

    calculateStack(stack:[any]):number {
        const lastItem = stack[stack.length-1];
        if(this.lastItemIsOperator(stack) && this.stackIsReadyForOperator(stack)) {
            switch(lastItem) {
                case "+":
                    //
                
                case "-":
                    //
                
                case "*":
                    //
                
                case "/":
                    //
                
                default:
                    throw new Error("Invalid operator");
            }
        }
        return lastItem;
    }

    calculate():number {
        return this.calculateStack(this.command_stack);
    }

    addItemToStack(item:any):void {
        if(this.itemIsValid(item)) {
            this.command_stack.push(item);
            return;
        }
    }

    itemIsValid(item:any):boolean {
        if(isNaN(Number(item)) || !VALID_OPERATORS.includes(item)) {
            throw new TypeError("Input must be a valid number or operator.");
        }
        return true;
    }

    init(stack:[any]):void {
        this.command_stack = stack;
    }

    get command_stack():[any] {
        return this.command_stack;
    }

    set command_stack(stack:[any]) {
        this.command_stack = stack;
    }
}

export { RPNCalculator };