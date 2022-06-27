import RPNCalculator from "../../classes/RPNCalculator";

describe("RPNCalculator class unit tests", () => {
    const calculator = new RPNCalculator();

    beforeEach(() => {
        calculator.clearStack();
    });

    it("Performs operations on an array input", () => {
        calculator.setStack([5, 5, 5, 8, "+", "+", "-"]);
        expect(calculator.calculate()).toEqual(-13);

        calculator.appendToStack([13, "+"]);
        expect(calculator.calculate()).toEqual(0);
    });

    it("Performs step by step input", () => {
        // 5 8 +
        calculator.addItemToStack(5);
        expect(calculator.calculate()).toEqual(5);

        calculator.addItemToStack(8);
        expect(calculator.calculate()).toEqual(8);

        calculator.addItemToStack("+");
        expect(calculator.calculate()).toEqual(13);

        // -3 -2 * 5 +
        calculator.clearStack();
        calculator.addItemToStack(-3);
        expect(calculator.calculate()).toEqual(-3);

        calculator.addItemToStack(-2);
        expect(calculator.calculate()).toEqual(-2);

        calculator.addItemToStack("*");
        expect(calculator.calculate()).toEqual(6);

        calculator.addItemToStack(5);
        expect(calculator.calculate()).toEqual(5);

        calculator.addItemToStack("+");
        expect(calculator.calculate()).toEqual(11);

        // 5 9 1 - /
        calculator.clearStack();
        calculator.addItemToStack(5);
        expect(calculator.calculate()).toEqual(5);

        calculator.addItemToStack(9);
        expect(calculator.calculate()).toEqual(9);

        calculator.addItemToStack(1);
        expect(calculator.calculate()).toEqual(1);

        calculator.addItemToStack("-");
        expect(calculator.calculate()).toEqual(8);

        calculator.addItemToStack("/");
        expect(calculator.calculate()).toEqual(0.625);
    });
});