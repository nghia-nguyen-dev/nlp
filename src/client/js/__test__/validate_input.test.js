import {validateInput} from "../validate_input";

test(`Cannot accept numbers`, () => {
    
    expect(validateInput(`Hello 5`))
        .toBe(false)
}) 