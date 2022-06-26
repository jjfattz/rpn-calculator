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
    input_stack:any[];
    number_stack:any[];

    constructor(stack:any[] = [], options:Options = DEFAULT_OPTIONS) {
        super();
        this.input_stack = [];
        this.number_stack = [];
        this.options = options;
        this.setStack(stack);
    }

    clearStack():void {
        this.input_stack = [];
    }

    getOperationResult(operation:string, num1:number, num2:number):number {
        let result:number = 0;
        switch(operation) {
            case "+":
                result = this.add(num1, num2);
                break;
            
            case "-":
                result = this.subtract(num1, num2);
                break;
            
            case "*":
                result = this.multiply(num1, num2);
                break;
            
            case "/":
                result = this.divide(num1, num2);
                break;
            
            default:
                throw new Error(`Invalid operator`);
        }

        return result;
    }

    calculateStackItem(item:any):void {
        const number_item:number = Number(item);
        let num1:number, num2:number;
        if (!isNaN(number_item)) {
            this.number_stack.push(number_item);
        } else {
            if (this.number_stack.length >= 2) {
                num2 = this.number_stack.pop();
                num1 = this.number_stack.pop();
                this.number_stack.push(this.getOperationResult(item, num1, num2));
            }
        }
    }

    calculate():number {
        this.number_stack = [];
        this.input_stack.forEach(item => {
            return this.calculateStackItem(item);
        });

        if(this.number_stack.length > 1) {
            return this.number_stack[this.number_stack.length-1];
        }

        this.input_stack = this.number_stack;
        return this.input_stack[0];
    }

    addItemToStack(item:any):void {
        if(this.input_stack.length+1 > this.options.max_stack_size) {
            throw new Error(`Max stack size exceeded`);
        }
        if(this.itemIsValid(item)) {
            this.input_stack.push(item);
            return;
        }
    }

    setStack(stack:any[]):void {
        this.clearStack();
        this.appendToStack(stack);
    }

    appendToStack(items:any[]):void {
        items.forEach(item => {
            this.addItemToStack(item);
        });
    }

    itemIsValid(item:any):boolean {
        if(isNaN(Number(item)) && !VALID_OPERATORS.includes(item)) {
            throw new TypeError(`Input must be a valid number or operator (${VALID_OPERATORS}).`);
        }
        return true;
    }
}

export { RPNCalculator };