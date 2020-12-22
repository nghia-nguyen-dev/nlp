var path = require("path");
const express = require("express");
const bodyParser = require(`body-parser`);
const callAPI = require("./mockAPI.js");

// Environment variable setup
const dotenv = require("dotenv").config();
const API_KEY = process.env.API_KEY;

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
	console.log("Example app listening on port 8080!");
});

app.post("/test", function (req, res) {
	const mood = req.body.mood;

	// send mood to API
	callAPI(API_KEY, mood)
		.then((res) => JSON.parse(res))
		.then((data) => res.send(data))
		.catch((err) => console.log(`error on the server: ${err}`));
});
