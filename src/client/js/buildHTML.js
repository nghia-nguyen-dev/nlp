function buildHTML(data) {
	const results = document.getElementById("results");

	const { confidence, subjectivity } = data;
	const innerHTML = `<p>Your input was <b>${subjectivity}</b> and your confidence scored: <b>${confidence}</b> out of 100</p>`;

    results.innerHTML = innerHTML;
}

export { buildHTML };
