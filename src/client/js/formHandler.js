import { buildHTML } from "./buildHTML";
import { validateInput } from "./validate_input";

function handleSubmit(event) {
	event.preventDefault();

	// user input must be placed inside object literal when passing into JSON.stringify or will error out!!!
	const mood = document.getElementById("name").value;

	// Validation
	if (!validateInput(mood)) {
		alert(`Input cannot accept numbers :(`);
		return;
	}

	console.log("::: Form Submitted :::");

	const options = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		// Body data type must match "Content-Type" header
		body: JSON.stringify({ mood }),
	};

	fetch(`/test`, options)
		.then((res) => res.json())
		.then(buildHTML)
		.catch((err) => console.log(`error with client request: ${err}`));
}

export { handleSubmit };
