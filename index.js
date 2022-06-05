var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const axios_ = require("axios");
const apiUrl = require("./constants").apiUrl;
const queries = require("./constants").queries;

const getDocumentsUser = async (user) => {
  const response = await axios_.post(apiUrl, {
    query: queries.getDocumentsUser,
    variables: { user: user },
  });
  return response.data.data;
};

var schema = buildSchema(`
type Log {
    Doc: String
    Description: String
    User: String
    Date: String
}
input LogInput{
  doc: String!
  user: String!
  description: String!
}

type Query {
    logsById(Doc: String): [Log]
}

`);

var root = {
  logsById: async (Doc) => {
    const response = await getDocumentsUser("10");
    return response;
  },
};

var app = express();
app.get("/2E", (req, res) => {
  getDocumentsUser
getDocumentsUser("Johan")
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      console.error(e);
    });
});

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );
app.listen(3002);
