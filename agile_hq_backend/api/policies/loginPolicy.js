const validate = require('sails-hook-validation-ev/lib/validate');
module.exports = async (req, res, next) => {
  validate(req, req => {
    req.check('email').exists().isEmail().withMessage('Enter valid email');
    req.check('password').exists().withMessage('Enter valid password');
  });
  const errors = await req.getValidationResult();
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};
