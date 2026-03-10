const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  // Addition Tests
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction Tests
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-10, -3)).toBe(-7);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should return zero when subtracting equal numbers', () => {
      expect(subtract(7, 7)).toBe(0);
    });
  });

  // Multiplication Tests
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractional numbers', () => {
      expect(multiply(0.5, 0.5)).toBeCloseTo(0.25);
    });
  });

  // Division Tests
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide negative by positive', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide a number by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBeCloseTo(5.25);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Error: Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Error: Cannot divide by zero');
    });

    test('should produce decimal result from integer division', () => {
      expect(divide(1, 3)).toBeCloseTo(0.3333, 3);
    });
  });

  // Calculate Function Tests (Routing Tests)
  describe('Calculate Function (routing)', () => {
    test('should route to addition with + operator', () => {
      expect(calculate(2, 3, '+')).toBe(5);
    });

    test('should route to subtraction with - operator', () => {
      expect(calculate(10, 4, '-')).toBe(6);
    });

    test('should route to multiplication with * operator', () => {
      expect(calculate(45, 2, '*')).toBe(90);
    });

    test('should route to multiplication with × operator', () => {
      expect(calculate(45, 2, '×')).toBe(90);
    });

    test('should route to division with / operator', () => {
      expect(calculate(20, 5, '/')).toBe(4);
    });

    test('should route to division with ÷ operator', () => {
      expect(calculate(20, 5, '÷')).toBe(4);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculate(5, 3, '%')).toThrow('Invalid operator');
    });

    test('should handle division by zero through calculate', () => {
      expect(() => calculate(10, 0, '/')).toThrow('Error: Cannot divide by zero');
    });
  });

  // Edge Cases and Examples from Image
  describe('Example Operations from Image', () => {
    test('2 + 3 = 5', () => {
      expect(calculate(2, 3, '+')).toBe(5);
    });

    test('10 - 4 = 6', () => {
      expect(calculate(10, 4, '-')).toBe(6);
    });

    test('45 * 2 = 90', () => {
      expect(calculate(45, 2, '*')).toBe(90);
    });

    test('20 / 5 = 4', () => {
      expect(calculate(20, 5, '/')).toBe(4);
    });
  });

  // Integration Tests
  describe('Integration Tests', () => {
    test('should handle consecutive calculations', () => {
      const result1 = calculate(10, 5, '+');
      const result2 = calculate(result1, 3, '*');
      expect(result2).toBe(45);
    });

    test('should maintain precision with multiple operations', () => {
      const result1 = calculate(100, 3, '/');
      const result2 = calculate(result1, 2, '*');
      expect(result2).toBeCloseTo(66.67, 1);
    });
  });
});
