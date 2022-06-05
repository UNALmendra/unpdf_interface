var soap = require("soap");
var express = require("express");
var fs = require("fs");

const axios_ = require("axios");
const apiUrl = require("./constants").apiUrl;
const queries = require("./constants").queries;

const getDocumentsUser = async (args) => {
  const response = await axios_.post(apiUrl, {
    query: queries.getDocumentsUser,
    variables: { user: args.user },
  });
  return response.data.data;
};

var serviceObject = {
  DocumentsService: {
    DocumentsServiceSoapPort: {
      Documents: getDocumentsUser,
    },
    DocumentsServiceSoap12Port: {
      Documents: getDocumentsUser,
    },
  },
};

var xml = fs.readFileSync("service.wsdl", "utf8");

var app = express();

app.listen(3002, function () {
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:3002" + wsdl_path + "?wsdl");
});
console.log("Running on 3002");
