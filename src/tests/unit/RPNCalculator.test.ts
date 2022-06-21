import { RPNCalculator } from "../../classes/RPNCalculator";

test("Test basic operations", () => {
    expect(() => {
        const calculator = new RPNCalculator(["5", "4", "+"]);
        calculator.addItemToStack(5);
        calculator.addItemToStack(4);
        calculator.addItemToStack("+");
        return calculator.calculate();
    }).toEqual(9);
});