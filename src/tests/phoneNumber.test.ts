// Import the phone number function to be tested
import formatPhoneNumber from '../index'

describe('formatPhoneNumber', () => {

  it('formats a valid 10-digit number correctly', () => {
    const input = "4155448375";
    const output = formatPhoneNumber(input);
    expect(output).toBe("(415) 544-8375");
  });

  it('throws error for non-numeric input', () => {
    expect(() => {
      formatPhoneNumber("abcd123456");
    }).toThrow("Invalid phone number input");
  });

  it('throws error for input with more than 10 characters', () => {
    expect(() => {
      formatPhoneNumber("415544837511");
    }).toThrow("Invalid phone number input");
  });

  it('throws error for input with less than 10 characters', () => {
    expect(() => {
      formatPhoneNumber("41554483");
    }).toThrow("Invalid phone number input");
  });

});
