/**
 * Wraps an asynchronous function and ensures errors are passed to the `next` middleware.
 * @param {Function} fn - The asynchronous function to wrap.
 * @returns {Function} A middleware function.
 */
const asyncMiddleware = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = {
  asyncMiddleware,
};
