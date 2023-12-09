// FILEPATH: /Users/sugawarakouhei/projects/sandbox-next-app/src/utils/number.test.ts
import { number } from './number';

describe('number function', () => {
  it('should return the multiplication of the two numbers', () => {
    const value = 5;
    const unit = 10;
    const expected = 50;
    const result = number(value, unit);
    expect(result).toBe(expected);
  });

  it('should return 0 when one of the numbers is 0', () => {
    const value = 0;
    const unit = 10;
    const expected = 0;
    const result = number(value, unit);
    expect(result).toBe(expected);
  });

  it('should return a negative number when one of the numbers is negative', () => {
    const value = -5;
    const unit = 10;
    const expected = -50;
    const result = number(value, unit);
    expect(result).toBe(expected);
  });
});
