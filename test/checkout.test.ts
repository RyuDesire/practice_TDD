import { checkout } from "../src/checkout";

describe ('checkout test',()=> {
    it('should return 0 when no items added to the list', ()=>{
        expect(checkout("")).toBe(0);
    });
    it('should return 50 when sending an A',() => {
        expect(checkout('A')).toBe(50);
    });
    it('should return 30 when sending a B', () => {
        expect(checkout('B')).toBe(30);
    });
    it('should return 20 when sending a C', () => {
        expect(checkout('C')).toBe(20);
    });
    it('should return 15 when sending a D', () => {
        expect(checkout('D')).toBe(15);
    });
    it('should return 30 when sending two D', () => {
        expect(checkout('DD')).toBe(30);
    });
    it('should return 115 when sending one of each one', () => {
        expect(checkout('ABCD')).toBe(115);
    })
    it('should throw an error when sending an unknown item', () => {
        expect(() => checkout("Z")).toThrow("Unknown Item");
    })
});