import { RPNCalculator } from "../../classes/RPNCalculator";

test("Test basic operations", () => {
    expect(() => {
        const input:any = ["5", "4", "+"];
        const calculator = new RPNCalculator(input);
        calculator.addItemToStack(5);
        calculator.addItemToStack(4);
        calculator.addItemToStack("+");
        return calculator.calculate();
    }).toEqual(9);
});