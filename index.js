var soap = require("soap");
var express = require("express");
var fs = require("fs");
var cors = require("cors");

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

app.use(function (req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors())

app.get("/2B/:id?", async (req, response) => {
  var id = req.params.id;
  let userId = "31e5d31c-d36e-441d-a666-37d272f16a35";
  if (id) userId = id;
  var url = "https://api.skillsly.app/soap/ws";
  var args = { userId: userId };
  await soap.createClient(url, function (err, client) {
    client.getUser(args, function (err, res) {
      if (err) throw err;
      response.send(res);
    });
  });
});

app.listen(3002, function () {
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:3002" + wsdl_path + "?wsdl");
});
console.log("Running on 3002");
