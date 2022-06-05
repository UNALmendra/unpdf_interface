var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

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
  logsById: (Doc) => {
    return ["test", "test", Doc];
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3002);
