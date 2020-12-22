var https = require("follow-redirects").https;
var fs = require("fs");

function callAPI(key, mood) {
	var options = {
		method: "POST",
		hostname: "api.meaningcloud.com",
		path: `/sentiment-2.1?key=${key}&lang=en&txt=${encodeURI(
			mood
		)}&model=general`,
		headers: {},
		maxRedirects: 20,
	};

	return new Promise((resolve, reject) => {
		var req = https.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function (chunk) {
				var body = Buffer.concat(chunks).toString();
				resolve(body);
			});

			res.on("error", function (error) {
				reject(`error with API call: ${error}`);
			});
		});

		req.end();
	});
}

module.exports = callAPI;
