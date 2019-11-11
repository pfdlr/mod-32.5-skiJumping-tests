const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should return style points', () => {
        const actual = calculateStylePoints([19, 19, 19, 19.5, 19])
        const expected = 57;
        const message = 'Check number of notes'
        assert.equal(actual, expected, message)
    });
});