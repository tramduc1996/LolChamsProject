const mssql = require("../../mssql");
const TYPES = require("tedious").TYPES;

const post = item => {
  console.log(item.fullName);

  return mssql
    .executeProc("Message_Insert", sqlRequest => {
      sqlRequest.addParameter("fullName", TYPES.NVarChar, item.fullName, {
        length: 150
      });
      sqlRequest.addParameter("email", TYPES.NVarChar, item.email, {
        length: 150
      });
      sqlRequest.addParameter("message", TYPES.NVarChar, item.message, {
        length: 1000
      });
      sqlRequest.addOutputParameter("id", TYPES.Int, null);
    })
    .then(response => {
      console.log(response.outputParameters);
      return response.outputParameters;
    });
};

module.exports = {
  post
};
