import { buildHTML } from "./buildHTML";
import { validateInput } from "./validate_input";

function handleSubmit(event) {
	event.preventDefault();

	const mood = document.getElementById("name").value;

	// Validate input to not accept numbers
	if (!validateInput(mood)) {
		alert(`Input cannot accept numbers :(`);
		return;
	}

	console.log("::: Form Submitted :::");

	const options = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "text/plain",
		},
		// Body data type must match "Content-Type" header
		body: mood,
	};

	fetch(`http://localhost:8080/test`, options)
		.then((res) => res.json())
		.then(buildHTML)
		.catch((err) => console.log(`error with client request: ${err}`));
}

export { handleSubmit };
