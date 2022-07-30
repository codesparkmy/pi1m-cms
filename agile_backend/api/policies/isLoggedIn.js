module.exports = async (req, res, next) => {
  sails.helpers.verifyJwt.with({ req, res }).switch({
    error: err => res.serverError(err),
    invalid: error => res.status(401).json({ message: 'Unauthorized access', error }),
    success: () => next()
  });
};

