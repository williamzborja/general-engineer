const addFive = require('./addFive');


test('returns the numebr plus 5', () => {
    expect(addFive(1)).toBe(6);
})
