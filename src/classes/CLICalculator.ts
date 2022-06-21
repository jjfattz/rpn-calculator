import { RPNCalculator } from "./RPNCalculator";

class CLICalculator {
    constructor(calculator:RPNCalculator) {
        this.calculator = calculator;
    }

    set calculator(calculator:RPNCalculator) {
        this.calculator = calculator;
    }
}

export { CLICalculator };