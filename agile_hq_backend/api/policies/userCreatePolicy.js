const validate = require('sails-hook-validation-ev/lib/validate');
module.exports = async (req, res, next) => {
  validate(req, req => {
    req.check('userstatus').exists().isBoolean().withMessage('User status missing');
    req.check('firstName').exists().withMessage('First name is required');
    req.check('lastName').exists().withMessage('Last name is required');
    req.check('username').exists().withMessage('Username is required');
    req.check('email').exists().isEmail().withMessage('Enter valid email');
    req.check('password').exists().isLength({min:8}).withMessage('Enter valid password');
  });
  console.log('teat')
  const errors = await req.getValidationResult();
  if (errors.isEmpty()) {
    console.log('teat676')
    return next();
  }
  console.log('teat5555')
  return res.status(400).json({ errors: errors.array() });
};
