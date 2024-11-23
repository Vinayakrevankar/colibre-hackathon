const { GetCommand } = require("@aws-sdk/lib-dynamodb");

const getUser = async (client, emailId) => {
  const params = {
    TableName: 'dev-student-users3',
    Key: {
      id: emailId
    }
  };

  try {
    const command = new GetCommand(params);
    const response = await client.send(command);
    return response.Item;
  } catch (err) {  
    console.log("Error in getUser", err);
    throw err;
  }
};

module.exports = {
  getUser
};
