const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

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
      expect(() => calculate(5, 3, '&')).toThrow('Invalid operator');
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

  // Modulo Tests
  describe('Modulo (modulo)', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo from image example', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo resulting in zero', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should calculate modulo with different values', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(7, 2)).toBe(1);
    });

    test('should handle negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle two negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Error: Cannot perform modulo with zero divisor');
    });

    test('should handle large numbers', () => {
      expect(modulo(1000000, 3)).toBe(1);
    });

    test('should handle decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  // Exponentiation Tests
  describe('Exponentiation (power)', () => {
    test('should calculate power from image example', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with base 2', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(2, 4)).toBe(16);
      expect(power(2, 5)).toBe(32);
    });

    test('should calculate power with base 5', () => {
      expect(power(5, 2)).toBe(25);
      expect(power(5, 3)).toBe(125);
    });

    test('should return 1 when exponent is zero', () => {
      expect(power(10, 0)).toBe(1);
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
    });

    test('should return base when exponent is one', () => {
      expect(power(7, 1)).toBe(7);
      expect(power(100, 1)).toBe(100);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(10, -2)).toBe(0.01);
    });

    test('should handle negative base', () => {
      expect(power(-2, 2)).toBe(4);
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle decimal base and exponent', () => {
      expect(power(2.5, 2)).toBe(6.25);
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large powers', () => {
      expect(power(2, 10)).toBe(1024);
      expect(power(10, 3)).toBe(1000);
    });
  });

  // Square Root Tests
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root from image example', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate perfect square roots', () => {
      expect(squareRoot(16)).toBe(4);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate non-perfect square roots', () => {
      expect(squareRoot(2)).toBeCloseTo(1.4142, 3);
      expect(squareRoot(10)).toBeCloseTo(3.1623, 3);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(squareRoot(0.25)).toBe(0.5);
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Error: Cannot calculate square root of a negative number');
      expect(() => squareRoot(-4)).toThrow('Error: Cannot calculate square root of a negative number');
      expect(() => squareRoot(-100)).toThrow('Error: Cannot calculate square root of a negative number');
    });

    test('should verify square root results', () => {
      const sqrt9 = squareRoot(9);
      expect(sqrt9 * sqrt9).toBe(9);

      const sqrt16 = squareRoot(16);
      expect(sqrt16 * sqrt16).toBe(16);
    });
  });

  // Extended Calculate Function Tests
  describe('Calculate Function with Extended Operations', () => {
    test('should route to modulo with % operator', () => {
      expect(calculate(5, 2, '%')).toBe(1);
      expect(calculate(10, 3, '%')).toBe(1);
    });

    test('should route to power with ^ operator', () => {
      expect(calculate(2, 3, '^')).toBe(8);
      expect(calculate(5, 2, '^')).toBe(25);
    });

    test('should route to power with ** operator', () => {
      expect(calculate(2, 3, '**')).toBe(8);
      expect(calculate(5, 2, '**')).toBe(25);
    });

    test('should route to square root with √ operator', () => {
      expect(calculate(16, null, '√')).toBe(4);
      expect(calculate(25, null, '√')).toBe(5);
    });

    test('should handle error for invalid operator', () => {
      expect(() => calculate(5, 3, '&')).toThrow('Invalid operator');
    });

    test('should handle extended operation errors', () => {
      expect(() => calculate(10, 0, '%')).toThrow('Error: Cannot perform modulo with zero divisor');
      expect(() => calculate(-4, null, '√')).toThrow('Error: Cannot calculate square root of a negative number');
    });
  });

  // Extended Operations from Image
  describe('Example Operations from Image', () => {
    test('modulo with 5 % 2 = 1', () => {
      expect(calculate(5, 2, '%')).toBe(1);
    });

    test('power with 2 ^ 3 = 8', () => {
      expect(calculate(2, 3, '^')).toBe(8);
    });

    test('square root with √16 = 4', () => {
      expect(calculate(16, null, '√')).toBe(4);
    });
  });

  // Edge Cases and Advanced Scenarios
  describe('Edge Cases and Advanced Scenarios', () => {
    test('should chain modulo and power operations', () => {
      const result1 = calculate(17, 5, '%');
      const result2 = calculate(result1, 2, '^');
      expect(result2).toBe(4);
    });

    test('should chain power and square root operations', () => {
      const result1 = calculate(5, 2, '^');
      const result2 = calculate(result1, null, '√');
      expect(result2).toBe(5);
    });

    test('should combine basic and advanced operations', () => {
      const result1 = calculate(10, 3, '+');
      const result2 = calculate(result1, 2, '^');
      expect(result2).toBe(169);
    });

    test('should maintain precision across extended operations', () => {
      const sqrt2 = squareRoot(2);
      const squared = power(sqrt2, 2);
      expect(squared).toBeCloseTo(2, 10);
    });
  });
});
