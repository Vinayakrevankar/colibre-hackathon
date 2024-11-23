const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const httpUtil = require('../util/httpUtil');
const securityDA = require('./securityDA');

// Initialize DynamoDB client and store it in app.locals
const dynamoDBClient = new DynamoDBClient({ region: 'us-east-1' });
const JWT_SECRET = "JqaXPsfAMN4omyJWj9c8o9nbEQStbsiJ";

/**
 * Middleware to handle authorization using JWT tokens.
 * Verifies the token and checks user existence in the database.
 */
const authFilterMiddleware = async (req, res, next) => {
  if (!req.app.locals.dynamoDBClient) {
    req.app.locals.dynamoDBClient = dynamoDBClient;
  }

  try {
    const token = req.get('Authorization');
    console.log("token>>>>", token);

    if (token && token.split('.').length > 1) {
      console.log("LINE 32", token);
      const userInfo = jwt.verify(token, JWT_SECRET);
      console.log("userInfo>>>>>", userInfo);

      if (_.isEmpty(userInfo)) {
        res.json(httpUtil.getUnauthorized());
        return;
      }

      const { emailAddress, firstName, lastName, username, role, userId } = userInfo;

      const user = await securityDA.getUser(req.app.locals.dynamoDBClient, emailAddress);

      if (!user || user.id !== emailAddress || user.username !== username) {
        res.json(httpUtil.getUnauthorized());
        return;
      }

      // Store additional user info in res.locals
      res.locals.id = emailAddress;
      res.locals.emailAddress = emailAddress;
      res.locals.firstName = firstName;
      res.locals.lastName = lastName;
      res.locals.username = username;
      res.locals.role = role;
      res.locals.userType = userType;
      res.locals.userId = userId;

      next();
    } else {
      console.log("LINE 32", token);
      throw new Error('Token Expired/Invalid Token');
    }
  } catch (error) {
    console.error(error);
    res.status(401).json(httpUtil.getUnauthorized());
  }
};

module.exports = {
  authFilterMiddleware,
};
