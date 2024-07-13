import Validator from '../validator';

test('Valid username', () => {
  expect(Validator.validateUsername('validUsername')).toBe(true);
});

test('Invalid username with 4 digits in a row', () => {
  expect(Validator.validateUsername('invalid1234')).toBe(false);
});

test('Invalid username starting with a digit', () => {
  expect(Validator.validateUsername('1invalid')).toBe(false);
});

test('Invalid username ending with a digit', () => {
  expect(Validator.validateUsername('invalid1')).toBe(false);
});

test('Invalid username with special characters', () => {
  expect(Validator.validateUsername('invalid@username')).toBe(false);
});
