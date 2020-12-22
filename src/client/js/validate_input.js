function validateInput(input) {
    const testCase = /^([^0-9]*)$/;
    const results = testCase.test(input);
    return results;
}

export {validateInput}