/**
 * Utility functions for generating API responses
 */

/**
 * Creates a success response.
 * @param {any} payload - The response payload.
 * @param {string} message - The success message.
 * @returns {object} The success response.
 */
const getSuccess = (payload = null, message = 'OK') => ({
  status: 200,
  errorCode: null,
  message,
  payload,
});

/**
 * Creates a created response.
 * @param {any} payload - The response payload.
 * @param {string} message - The created message.
 * @returns {object} The created response.
 */
const getCreated = (payload = null, message = 'Created') => ({
  status: 201,
  errorCode: null,
  message,
  payload,
});

/**
 * Creates a bad request response.
 * @param {Array} error - An array containing an error code and message.
 * @returns {object} The bad request response.
 */
const getBadRequest = (error = [null, 'Bad Request']) => ({
  status: 400,
  errorCode: error[0],
  message: error[1],
  payload: null,
});

/**
 * Creates an exception response.
 * @param {Array} error - An array containing an error code and message.
 * @returns {object} The exception response.
 */
const getException = (error = [null, 'Internal Server Error']) => ({
  status: 500,
  errorCode: error[0],
  message: error[1],
  payload: null,
});

/**
 * Creates a not found response.
 * @param {Array} error - An array containing an error code and message.
 * @returns {object} The not found response.
 */
const getNotFound = (error = [null, 'Resource Not Found']) => ({
  status: 404,
  errorCode: error[0],
  message: error[1],
  payload: null,
});

/**
 * Creates an unauthorized response.
 * @param {Array} error - An array containing an error code and message.
 * @returns {object} The unauthorized response.
 */
const getUnauthorized = (error = [null, 'Unauthorized']) => ({
  status: 401,
  errorCode: error[0],
  message: error[1],
  payload: null,
});

/**
 * Creates an access denied response.
 * @param {Array} error - An array containing an error code and message.
 * @returns {object} The access denied response.
 */
const getAccessDenied = (error = [null, 'Forbidden']) => ({
  status: 403,
  errorCode: error[0],
  message: error[1],
  payload: null,
});

module.exports = {
  getSuccess,
  getCreated,
  getBadRequest,
  getException,
  getNotFound,
  getUnauthorized,
  getAccessDenied,
};

