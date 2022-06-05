var express = require("express");

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

var app = express();
app.get("/2E", (req, res) => {
  getDocumentsUser;
  getDocumentsUser("Johan")
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      console.error(e);
    });
});

app.listen(3002);
console.log("Running on 3002");
