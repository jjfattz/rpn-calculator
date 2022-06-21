import { RPNCalculator } from "../../classes/RPNCalculator";

test("Test basic operations", () => {
    const calculator1 = new RPNCalculator();
    const input:any = [7, 3, "-"];
    const calculator2 = new RPNCalculator(input);
    calculator1.addItemToStack(5);
    calculator1.addItemToStack(4);
    calculator1.addItemToStack("+");
    expect(calculator1.command_stack).toEqual([5, 4, "+"]);
    expect(calculator2.command_stack).toEqual([7, 3, "-"]);
    expect(calculator1.calculate()).toEqual(9);
    expect(calculator2.calculate()).toEqual(4);
});