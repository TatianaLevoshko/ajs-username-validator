export default class Validator {
  static validateUsername(username) {
    const regex = /^(?!.*\d{4})[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;
    const endsWithDigit = /\d$/;
    return regex.test(username) && !endsWithDigit.test(username);
  }
}
