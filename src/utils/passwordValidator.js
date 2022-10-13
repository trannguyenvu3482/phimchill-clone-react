import passwordValidator from 'password-validator';

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(8, 'Mật khẩu phải tối thiểu 8 kí tự') // Minimum length 8
  .is()
  .max(25) // Maximum length 100
  .has()
  .uppercase(1, 'Mật khẩu phải chứa ít nhất 1 kí tự in hoa') // Must have uppercase letters
  .has()
  .lowercase(1, 'Mật khẩu phải chứa ít nhất 1 kí tự in thường') // Must have lowercase letters
  .has()
  .not()
  .spaces(1, 'Mật khẩu không được chứa kí tự khoảng trắng'); // Should not have spaces

export default schema;
