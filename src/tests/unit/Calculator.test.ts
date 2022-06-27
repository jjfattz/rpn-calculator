import Calculator from "../../classes/Calculator";
describe("Testing the Calculator class", () => {
    const basic_calculator = new Calculator();
    it("Performs arithmetic operations", () => {
        expect(basic_calculator.add(5, 4)).toEqual(9);
        expect(basic_calculator.subtract(8, 2)).toEqual(6);
        expect(basic_calculator.multiply(5, 4)).toEqual(20);
        expect(basic_calculator.divide(10, 2)).toEqual(5);
    });
});