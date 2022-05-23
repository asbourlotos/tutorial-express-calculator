// import installed node module express
const express = require("express");

// import installed node module body-parser
const bodyParser = require("body-parser");

// constant app as express method.
const app = express();

// port that the localhost:xxxx will run on.
const port = 3000;
// code that you need anytime you use body parser.
app.use(bodyParser.urlencoded({extended: true}));

// ******************** index.html routes ********************

// get request for "home" route that initially pulls the index.html file on page load.
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// post request that sends the numbers entered into the HTML page as numbers.
app.post("/", function(req, res) {
    // store num* pulled from body parser as numbers.
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    // the numbers are then calculated as a simple addition.
    var result = num1 + num2;
    // the result is then shown to the user as a response.
    res.send("The result of the calculation is " + result);
});

// ******************** bmiCalculator.html routes ********************

// get request for /bmicalculator route
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// post request that sends the numbers entered into the HTML page as numbers.
app.post("/bmicalculator", function(req, res) {
    // store height and weight pulled from body parser as numbers.
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    // the numbers are then calculated as per BMI calculation. (Imperial === (703 * weight) / (height * 2))
    var result = (703 * weight) / (height * height);
    // the result is then shown to the user as a response.
    res.send("With a weight of " + weight + " and a height of " + height + " your BMI is " + result + ".");
});

// console message showing that the port that the server is running on is correct.
app.listen(port, function() {
    console.log("Calculator app listening on port " + port);
});