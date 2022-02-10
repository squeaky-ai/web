import { TestConfig } from 'yup';

export const passwordTest: TestConfig<string> = {
  name: 'valid password',
  test: isValidPassword,
  message: 'Password must match the criteria defined below'
};

function isValidPassword(input: string) {
  return input.length >= 8 &&
         /[a-z]/.test(input) &&
         /[A-Z]/.test(input) &&
         /[0-9]/.test(input);
}
